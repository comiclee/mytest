/**
 * Detecting vertical squash in loaded image.
 * Fixes a bug which squash image vertically while drawing into canvas for some images.
 * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
 *
 */
function detectVerticalSquash(img) {
  var iw = img.naturalWidth, ih = img.naturalHeight;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  var data = ctx.getImageData(0, 0, 1, ih).data;
  // search image edge pixel position in case it is squashed vertically.
  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = (ey + sy) >> 1;
  }
  var ratio = (py / ih);
  return (ratio===0)?1:ratio;
}

/**
 * A replacement for context.drawImage
 * (args are for source and destination).
 */
function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  // Works only if whole image is displayed:
  // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  // The following works correct also when only a part of the image is displayed:
  if (arguments.length==6) {
    ctx.drawImage(img, sx * vertSquashRatio, sy * vertSquashRatio,
      sw * vertSquashRatio, sh * vertSquashRatio);
  } else {
    ctx.drawImage(img, sx * vertSquashRatio, sy * vertSquashRatio,
      sw * vertSquashRatio, sh * vertSquashRatio,
      dx, dy, dw, dh );
  }
}

function render(src,rotation) {
  var image = new Image();
  image.onload = function() {
    var canvas = document.getElementById('pic-frame');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);

    var rangeLimit = 500;
    var imageWidth = image.width;
    var imageHeight = image.height;

    $('#result').empty();
    $('#info').html('原始尺寸：'+imageWidth+' x '+imageHeight+', 旋转：'+rotation+'deg');

    var ratio = imageWidth/imageHeight;
    if (ratio > 1) {
      imageWidth = (rangeLimit>imageWidth)? imageWidth : rangeLimit;
      imageHeight = Math.round(imageWidth/ratio);
    } else {
      imageHeight = (rangeLimit>imageHeight)? imageHeight : rangeLimit;
      imageWidth = Math.round(imageHeight*ratio);
    }

    $('#info').html($('#info').html()+', 转化后尺寸：'+imageWidth+' x '+imageHeight);


    image.width = imageWidth;
    image.height = imageHeight;
    canvas.width = imageWidth;
    canvas.height = imageHeight;
    var startX = 0;
    var startY = 0;

    if (rotation==90) {
      canvas.width = imageHeight;
      canvas.height = imageWidth;
      startX = 0;
      startY = -imageHeight;
    } else if (rotation==-90) {
      canvas.width = imageHeight;
      canvas.height = imageWidth;
      startX = -imageWidth;
      startY = 0;
    } else if (rotation==180 || rotation==-180) {
      startX = -imageWidth;
      startY = -imageHeight;
    }

    ctx.rotate(rotation*Math.PI/180);
    drawImageIOSFix(ctx,image,startX,startY,imageWidth,imageHeight);
  };
  image.src = src;
}

function loadImage(data) {
  var rotation = 0;
  EXIF.getData(data, function() {
    var orientation = EXIF.getTag(this,'Orientation');
    switch (orientation) {  //根据exif中照片的旋转信息对图片进行旋转
      case 3: rotation=180; break;
      case 6: rotation=90; break;
      case 8: rotation=-90; break;
      default : rotation=0;
    }
  });
  var reader = new FileReader();
  reader.onload = function(e) {
    render(e.target.result,rotation);
  };
  reader.readAsDataURL(data);
}

function submitImage() {
  var canvas = document.getElementById('pic-frame');
  var dataURL = canvas.toDataURL('image/jpeg').substring(23);
  $.post('saveFile2.php',{'pic':dataURL,'type':'jpg'},function(response) {
    alert('图片大小：'+(response.size/1024).toFixed(3)+'KB');
    document.getElementById('result').innerHTML = '<div>图片大小：'+(response.size/1024).toFixed(3)+'KB</div><img src="'+response.path+'">';
  });
}

if (window.WaimaiAndroid && WaimaiAndroid.openImageChooser) {
  WaimaiAndroid.openImageChooser('loadImage');
} else {
  document.getElementById('pic-input').onchange = function(evt) {
    loadImage(evt.target.files[0]);
  };
}

document.getElementById('submit').onclick = function() {
  submitImage();
  return false;
};
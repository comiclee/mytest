$('#camera').change(function(evt) {
  if (evt.target.files.length>0) {
    var file = evt.target.files[0];

    var rotation = 0;
    EXIF.getData(file, function() {
      var orientation = EXIF.getTag(this,'Orientation');
      switch (orientation) {  //根据exif中照片的旋转信息对图片进行旋转
        case 3: rotation=180; break;
        case 6: rotation=90; break;
        case 8: rotation=-90; break;
        default : rotation=0;
      }

      var reader = new FileReader();
      reader.onload = function(e) {
        var image = new Image();
        image.onload = function() {
          processImage(image, rotation);
        };
        image.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
});

//修改processImage函数
var canvas = document.getElementById('canvas');
var ratio = 0.1;
function processImage(image,rotation) {
  var ctx = canvas.getContext('2d');
  var imageWidthOrigin = image.width;
  var imageHeightOrigin = image.height;
  var imageWidth = imageWidthOrigin*ratio;
  var imageHeight = imageHeightOrigin*ratio;

  canvas.width = imageWidth ;

  canvas.height = imageHeight ;
  var startX = 0;
  var startY = 0;

  if (rotation==90) {
    canvas.width = imageHeight ;
    canvas.height = imageWidth ;
    startX = 0;
    startY = -imageHeight;
  } else if (rotation==-90) {
    canvas.width = imageHeight ;
    canvas.height = imageWidth ;
    startX = -imageWidth;
    startY = 0;
  } else if (rotation==180 || rotation==-180) {
    startX = -imageWidth;
    startY = -imageHeight;
  }

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.rotate(rotation*Math.PI/180);

  var vertSquashRatio = detectVerticalSquash(image);
  ctx.drawImage(image, 0, 0, imageWidthOrigin*vertSquashRatio, imageHeightOrigin*vertSquashRatio, startX, startY, imageWidth, imageHeight);
}

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
(function() {
  'use strict';
  var fileInput = document.querySelector('#file-input');
  var file = null;
  var formData = new FormData();
//  fileInput.onchange = function(event) {
//    var fileList = event.target.files;
//    for (var i= 0; i<fileList.length; i++) {
//      file = fileList[i];
//    }
//  };
  document.querySelector('#submit').addEventListener('click', function() {
    formData.append('name','abc');
    formData.append('no','123');
    if (fileInput.files.length>0) {
      formData.append('file',fileInput.files.item(0));
    }
    sendXhr();
  });
  function sendXhr() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/test/mytest/ajax/result.php');
    xhr.onreadystatechange = function() {
      if (xhr.readyState==4) {
        if (xhr.status==200) {
          alert(xhr.responseText);
        }
      }
    };
    xhr.send(formData);
  }
} ());
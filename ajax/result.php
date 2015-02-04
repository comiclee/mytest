<?php
  echo $_POST['name'].$_POST['no'];
  $file = $_FILES['file'];
  if ($file) {
    echo ','.$file["tmp_name"];
    move_uploaded_file($file["tmp_name"], "temp.png");
  }
?>
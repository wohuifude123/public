<?php
header("Content-Type:text/html;charset=utf-8");
require_once '../connect/connect.php';
$key_word="标红";//要搜索的关键字
if($_POST['key']){
	$key_word=$_POST['key']; //带参数的情况
}

$content = "爱情保卫战";
// 把字符串 "Hello world!" 中的字符 "world" 替换 "Shanghai"：
// echo str_replace("world","Shanghai","Hello world!");
$new_content = str_replace($key_word,'<font color=red>'.$key_word.'</font>',$content);//替换 搜索内容标红

//输出结果
echo $new_content;


?>
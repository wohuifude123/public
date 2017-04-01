<?php

header("Content-Type:text/html;charset=utf-8");
require_once '../connect/connect.php';

$host="localhost";
$username ='root';
$password ='123456';
$DbName="bobo";
$tableName_01 = "user";
$db = new DBConnect($host,$username,$password,$DbName);
$mid = $db->selectmid();
$mid = $mid+1;
//echo $mid."<br/>";
$mid = (string)$mid;
//echo $mid."<br/>";
//echo gettype($mid);

$db->insert($tableName_01,"(id,username,password)","($mid,'aa3','aa3')");
Session_start(); 
$_SESSION["name"]="我是黑旋风李逵"; 
?>
<?php
header("Content-Type:text/html;charset=utf-8");
require_once '../connect/connect.php';
$host="localhost";
$username ='root';
$password ='123456';
$DbName="stuok";
$tableName = "user";
$db = new DBConnect($host,$username,$password,$DbName);
$r01 = $db->queryAlJson($tableName);
echo $r01;
?>
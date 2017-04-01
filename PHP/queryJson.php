<?php
header("Content-Type:text/html;charset=utf-8");
require_once '../connect/connect.php';
$host="localhost";
$username ='root';
$password ='123456';
$DbName="bobo";
$tableName = "user";
$db = new DBConnect($host,$username,$password,$DbName);

$a_json = $db->queryAlJson("*",$tableName);
echo json_decode($a_json);
?>
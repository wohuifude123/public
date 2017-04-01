<?php

header("Content-Type:text/html;charset=utf-8");

//include('connect/connect.php');
require_once '../connect/connect.php';



$host="localhost";
$username ='root';
$password ='123456';
$DbName="bobo";
$tableName_01 = "user";
$db = new DBConnect($host,$username,$password,$DbName);
if(isset($_POST["name"]))
{
	$name=$_POST["name"];
	echo $name."<br/>";
}
if(isset($_POST["age"]))
{
	$age=$_POST["age"];
	echo $age."<br/>";
}
?>
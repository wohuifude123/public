<?php

header("Content-Type:text/html;charset=utf-8");


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
if(isset($_POST["address"]))
{
	$address=$_POST["address"];
	echo $address."<br/>";
}
if(isset($_POST["name"])&&isset($_POST["address"]))
{
	$db->update('uinformation',"name='$name',address='$address'",'where use_id=1');
}
?>
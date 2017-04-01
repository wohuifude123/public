<?php

header("Content-Type:text/html;charset=utf-8");
require_once 'connect/connect.php';

$uname = "u1";
$pname = "p2";
// isset()函数 一般用来检测变量是否设置 
 if(isset($_POST["submit"]) && $_POST["submit"] == "登陆")  
{
	echo "成功<br/>";
	$uname =  $_POST['username'];
	$pname = $_POST['password']; 
}



echo $uname."<br/>";
echo $pname."<br/>"; 

$host="localhost";
$username ='root';
$password ='123456';
$DbName="stuok";
$tableName = "Persons";
//createDb($host,$username,$password,$DbName)
$tableSql = "num int NOT NULL DEFAULT 0,
	FirstName varchar(15),
	LastName varchar(15),
	primary key (num)
	";
$db = new DBConnect($host,$username,$password,$DbName);
//$db->createTable($tableName,$tableSql);
$tableSql_01 = "num int NOT NULL DEFAULT 0,
	username varchar(15),
	password varchar(15),
	primary key (num)
	";
$tableName_01 = "user";
//$db->createTable($tableName_01,$tableSql_01);

//$db->insert($tableName_01,"(num,username,password)","(1,'aa','aa')");
//$db->dbClose();

//$db->queryAl($tableName_01,"*");
//$db->dbClose();

//$db->queryAl($tableName_01,"username");
//$db->dbClose();

//$db->uPost($tableName_01,"*","username","password",$uname,$pname);
$db->uPost($tableName_01,"username,password","username","password",$uname,$pname);
$db->dbClose();	
	
?>
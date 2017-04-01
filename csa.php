<?php

header("Content-Type:text/html;charset=utf-8");

//include('connect/connect.php');
require_once 'connect/connect.php';






$table="user";
$db='localhost';
$username ='root';
$password ='123456';
$dbname = 'txt';

connect($db,$username,$password,$dbname);

$name="zname";
$var="VARCHAR(20)";
//deleteAdd($table,$name,$var);

//$query = "SELECT * FROM ".$table;



$result = mysqlQuery($table);


echo "<table border='1'>";
/*
定义和用法
mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。
*/
while ($line = mysql_fetch_assoc($result))
{
	echo "<tr>";
	foreach ($line as $col_value)
	{
		echo "<td>$col_value</td>";
	}
	echo "</tr>";
}

echo "</table>";

// 释放结果集

session_start();

//$_SESSION['login'] = $_GET['contents'];

if(!isset($_GET['contents']))
{
	$contents = "aa";
}
else
{
	$contents = $_GET['contents'];
}

if($contents=="cc")
{
	$home_url = 'login.html?email=someone';
	header('Location: '.$home_url);
}
else
{
}

mysql_free_result($result);


$str = '';




//@select from

?>
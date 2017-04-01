<?php
header("Content-Type:text/html;charset=utf-8");
require_once 'connect/connect.php';
$table="user";
$db='localhost';
$username ='root';
$password ='123456';
$dbname = 'txt';

connect($db,$username,$password,$dbname);


echo "ab"."\n"."c"."<br/>";
/*

$columns="uid, uname, password";
$values="'7', 'gza','12345@163.com'";
mysqlInsert($table,$columns,$values);
*/

/*
$columns="uname='bb',password='321'";
$values="uid='6'";
mysqlUpdate($table,$columns,$values);
*/

/*
$values="uid='7'";
mysqlDelete($table,$values);
*/

$values="uid=3";
		$result = mysqlSelect($table,$values);
		while ($line = mysql_fetch_assoc($result)) {
			foreach ($line as $col_value) {
				echo "$col_value"."<br/>";
			}
			echo"-------------<br/>";
		};
$name="zname";
$var="VARCHAR(20)";
//alterAdd($table,$name,$var);
//deleteAdd($table,$name,$var);



//echo (mysql_fetch_assoc($result_Col))[0]."<br/>";

$result_Col = queryColumns($dbname,$table);
echo $result_Col;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>

<body>

<?php
header("Content-Type:text/html;charset=utf-8");
/*
class db{
   public $host;
   public function printHost(){
       echo $this -> host;
   }
}
*/
//$db = new db();
//$db -> host = 'localhost+123';  //设置他的属性
//$db -> printHost();  //使用方法
$css=array('style'=>'0','color'=>'green');
//echo $css['style']."<br/>";
//echo $css['color'];

class Mysql{
	//=> 是数组成员访问符号
	//-> 是对象成员访问符号
	private $host;//服务器地址
	private $root;//用户名
	private $password;//密码
	private $database;//数据库名
	//通过构造函数初始化类
	function __construct($host,$root,$password,$database){
		$this->host= $host;
		$this->root= $root;
		$this->password= $password;
		$this->database= $database;
		$this->connect();
	}
	//创建连接数据库及关闭数据库方法
	function connect(){
		$this->conn= mysql_connect($this->host,$this->root,$this->password) or die("DBConnnection Error !".mysql_error());
		mysql_select_db($this->database,$this->conn);
		mysql_query("set names utf8");
	}
	function dbClose(){
		mysql_close($this->conn);
	}
	//对mysql_query()、mysql_fetch_array()、mysql_num_rows()函数进行封装
	function query($sql){
		return mysql_query($sql);
	}
	
	function myArray($result){
		return mysql_fetch_array($result);
	}
	function rows($result){
		//返回结果集中行的数目。
		return mysql_num_rows($result);
	}
	//自定义查询数据方法
	function select($tableName){
		return $this->query("SELECT * FROM $tableName");
	}
	//自定义插入数据方法
	function insert($tableName,$fields,$value){
		$this->query("INSERT INTO $tableName $fields VALUES $value");
		
	}
	//自定义修改数据方法
	function update($tableName,$change,$condition){
		$this->query("UPDATE $tableName SET $change $condition");
	}
	//自定义删除数据方法
	function delete($tableName,$condition){
		$this->query("DELETE FROM $tableName $condition");
	}
}

$db = new Mysql("localhost","root","123456","stu01");

//$db->insert("score","(num,sname,course,score,credit)","(00001,'张红','QQ',77,8)");
//$db->dbClose();

//$db->update("score","score= 651","where num = 1 and course='PHP'");
//$db->dbClose();

?>

<?php
/*
    $select= $db->select("score");

    $row= $db->rows($select);

    if($row>=1){
*/
?>

<table border="1px">

    <tr>

        <th>num</th>

        <th>sname</th>

        <th>course</th>
        
        <th>score</th>
        
        <th>credit</th>
    </tr>

<?php
/*
    while($array = $db->myArray($select)){

        echo "<tr>";

        echo "<td>".$array['num']."</td>";

        echo "<td>".$array['sname']."</td>";

        echo "<td>".$array['course']."</td>";
		
		echo "<td>".$array['score']."</td>";
		
		echo "<td>".$array['credit']."</td>";

        echo "</tr>";

    }
*/
?>

</table>

<?php
/*
    }else{

        echo"查不到任何数据!";

    }

      

    $db->dbClose();
*/
?>

<?php

    //$db->delete("score","where num = 1 and course='JS'");

    //$db->dbClose();

?>

<?php
$result= $db->select("score");
/*
while ($line = mysql_fetch_assoc($result)) {
			foreach ($line as $col_value) {
				echo $col_value."<br/>";
			}
		echo "-------------------<br/>";
}
*/

$arr = array(
    'data' => array(
        array('1161043200000,74.29'),
        array('1161043200001,74.53'),
        array('1161043200002,78.99'),
        array('1161043200003,79.95')
    )
);
 
//echo json_encode($arr);

$web = 0;
echo $web.'</br>';
if($result){
	$users=array(); 
    $i=0;
	while($row=mysql_fetch_array($result,MYSQL_ASSOC)){ 
		echo $row['num'].'-----------'.$row['course'].'</br>';
		$users[$i]=$row; 
		$i++; 
 
    }
	
	//$web = json_encode(array('dataList'=>$users));
	$web = json_encode($users);
	 echo $web.'</br>' ; 
}
//解析JSON数据

$de_json =  json_decode($web,TRUE);
$count_json = count($de_json);

echo $count_json;

for ($i = 0; $i < $count_json; $i++)
{
	$num = $de_json[$i]['num'];
	$sname = $de_json[$i]['sname'];
	$course = $de_json[$i]['course'];
	$score = $de_json[$i]['score'];
	$credit = $de_json[$i]['credit'];
	echo $num."/-/".$sname."/-/".$course."/-/".$score."/-/".$credit.'</br>';
}



 ?>
</body>
</html>
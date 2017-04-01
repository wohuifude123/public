<?php
//数据库登录的用户

/*
$db='localhost';
$username ='root';
$password ='123456';
*/



/*

	2017年2月3日
	
	调用方法

		header("Content-Type:text/html;charset=utf-8");
		require_once 'connect/connect.php';
		
		$table="user";
		$db='localhost';
		$username ='root';
		$password ='123456';
		$dbname = 'txt';

		connect($db,$username,$password,$dbname);

	
*/

$conn;


function connect($db,$username,$password,$dbname){
	global $conn;
	$conn = mysql_connect($db,$username,$password);
	mysql_select_db($dbname, $conn) or die(mysql_error());
	mysql_query("SET NAMES UTF-8");
}

//connect($db,$username,$password);



$table="user";


//选择
$select = "select * from ".$table." where pid=?";




/*
	数据库的执行语句
*/



/*
	时间
		2016年11月26日
	说明
		查询数据库的功能
	举例
		$table="user";
		$result = mysqlQuery($table);
*/
function mysqlQuery($table)
{
	//查询语句
	$query = "SELECT * FROM ".$table; 
	$result = mysql_query($query) or die('Query failed: ' . mysql_error());
	return $result;
}
/*
	时间
		2016年11月26日
	说明
		插入数据库的功能
	举例
		$table="user";
		$columns="uid, uname, password";
		$values="'7', 'gza','12345@163.com'";
		mysqlInsert($table,$columns,$values);
*/
function mysqlInsert($table,$columns,$values)
{
	/*
	当用户在php中调用一个函数或者类的方法时，内核会创建一个新的符号表并激活之，这也是为什么我们无法在函数中使用函数外定义的变量原因，
	如果不是在一个函数里，则全局作用域的符号表处于激活状态。
	*/
	$sql = "INSERT INTO ".$table."(".$columns.")VALUES(".$values.")";
	global $conn;
	mysql_query($sql,$conn);
}
/*
	时间
		2016年11月26日
	说明
		修改数据库的功能
	举例
		$table="user";
		$columns="uname='bb',password='321'";
		$values="uid='6'";
		mysqlUpdate($table,$columns,$values);
*/
function mysqlUpdate($table,$columns,$values)
{
	$sql="update ".$table." set ".$columns." where ".$values;
	global $conn;
	if(mysql_query($sql,$conn))
		echo '修改成功。';
	else
		echo "修改失败，SQL:$sql错误：".mysql_error();
}
/*
	时间
		2016年11月26日
	说明
		删除数据库的功能
	举例
		$values="uid='7'";
		mysqlDelete($table,$values);
*/
function mysqlDelete($table,$values)
{
	$sql="delete from ".$table." where ".$values;
	global $conn;
	if(mysql_query($sql,$conn))
		echo '删除成功。';
	else
		echo "删除失败，SQL:$sql错误：".mysql_error();
}
/*
	时间
		2016年11月26日
	说明
		选择数据库的功能
	举例
		$table="user";
		$values="uid=3";
		$result = mysqlSelect($table,$values);
		while ($line = mysql_fetch_assoc($result)) {
			foreach ($line as $col_value) {
				echo "$col_value"."<br/>";
			}
			echo"-------------<br/>";
		}
*/
function mysqlSelect($table,$values)
{
	//查询语句
	$query = "SELECT * FROM ".$table." where ".$values;
	global $conn;
	$result = mysql_query($query,$conn) or die('Query failed: ' . mysql_error());
	return $result;
}

/*

	2017年2月3日
	
	调用方法
	
	alterAdd($table,$name,$var);
	
*/

function alterAdd($table,$name,$var)
{
	//增加字段
	$query = "alter table ".$table." add ".$name." VARCHAR(20) default NULL";
	global $conn;
	$result = mysql_query($query,$conn) or die('Query failed: ' . mysql_error());
	return $result;
}

/*

	2017年2月3日
	
	调用方法
	
	deleteAdd($table,$name,$var);
	
*/



function deleteAdd($table,$name,$var)
{
	//增加字段
	$query = "alter table ".$table." drop column ".$name;
	global $conn;
	$result = mysql_query($query,$conn) or die('Query failed: ' . mysql_error());
	return $result;
}


/*

	2017年2月9日
	
	功能说明
	
		获取数据库的列名
	
	调用方法
		
		$dbname = 'txt';
		$table="user";
		$result_Col = queryColumns($dbname,$table);
		echo $result_Col;
	
*/


function queryColumns($dbname,$table)
{
	// \r 换行回车
	// \n 回车
	$query ="use ".$dbname.";DESC ".$table.";show fields from ".$table.";";
	//$query ="use txt;DESC ".$table.";show fields from user";
	$sql_ar = preg_split("/;/", $query, -1, PREG_SPLIT_NO_EMPTY);//正则 表达式 分割 字符串
	// -1，则意味着没有限制
	// PREG_SPLIT_NO_EMPTY 只返回非空的成分
	$result=0;
	$str="";
	foreach($sql_ar as $sql)
	{
		
		//echo $sql."<br/>";
		mysql_query($sql) or die(mysql_error());
		if($sql=="show fields from ".$table)
		{
			//echo "恒公<br/>";
			$result = mysql_query($sql);
			while($CodeString = mysql_fetch_array($result))
			{
				$str.=$CodeString[0]."#";
			}
		}
	}
	$len = intval(strlen($str))-1;
	$str=substr($str,0,$len);
	//定义和用法
    //mysql_fetch_array() 函数从结果集中取得一行作为关联数组，或数字数组，或二者兼有
	return $str;
}

/*

	2017年2月20日
	
	功能说明
	
		数据库的对象
	
	调用方法

		$db = new Mysql("localhost","root","123456","stu01");
		
		插入
		$db->insert("score","(num,sname,course,score,credit)","(00001,'张红','QQ',77,8)");
		$db->dbClose();
		
		更新
		$db->update("score","score= 651","where num = 1 and course='PHP'");
		$db->dbClose();
		
		删除
		$db->delete("score","where num = 1 and course='JS'");
		$db->dbClose();
		
		查询
		$result= $db->select("score");
		
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

	
*/

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

/*

	2017年2月20日
	
	功能说明
	
		创建新数据库
	
	调用方法
	
		$host="localhost";
		$username ='root';
		$password ='123456';
		$DbName="stuok";
		createDb($host,$username,$password,$DbName)
	
*/
function createDb($host,$root,$password,$DbName)
{
	$conDb = mysql_connect($host,$root,$password);
	if (mysql_query("CREATE DATABASE $DbName",$conDb))
	{
		echo "Database created";
	}
	else
	{
		echo "Error creating database: " . mysql_error();
	}
}

/*

	2017年2月21日
	
	功能说明
	
		自己定义数据库的连接
	
	调用方法
	
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
		$db->createTable($tableName,$tableSql);
	
*/


class DBConnect
{
	private $host;//服务器地址
	private $root;//用户名
	private $password;//密码
	private $database;//数据库名
	//构造函数
	function __construct($host,$root,$password,$database) {
		$this->host= $host;
		$this->root= $root;
		$this->password= $password;
		$this->database= $database;
		$this->connect();
       
   }
   //析构函数
   function __destruct(){
	      
   }
   function connect(){
	   $this->conn= mysql_connect($this->host,$this->root,$this->password) or die("DBConnnection Error !".mysql_error());
	   mysql_select_db($this->database,$this->conn);
	   mysql_query("set names utf8");
	}
	function dbClose(){
			mysql_close($this->conn);
	}
	
	function createTable($tableName,$tableSql){
		$sql = "CREATE TABLE $tableName( $tableSql )";
		if (mysql_query($sql))
		{
			echo "table created";
		}
		
	}
	function query($sql){
		return mysql_query($sql);
	}
	//插入数据
	function insert($tableName,$fields,$value){
		$this->query("INSERT INTO $tableName $fields VALUES $value");	
	}
	//查询表的结构
	function desc($tableName){
		return $this->query("desc ".$tableName);	
	}
	
	/*
		时间
		
			2017年2月22日
	
		功能说明
	
			查询
			
			$db->queryAl($tableName_01,"*");
			$db->dbClose();
	*/

	function queryAl($tableName,$value){
		$result =$this->query("SELECT $value FROM $tableName");
		//echo $result;

		while ($line = mysql_fetch_array($result,MYSQL_ASSOC))
		{
			foreach ($line as $col_value)
			{
				echo "$col_value<br/>";
			}
		}

	}
	/*
		时间
		
			2017年2月22日
	
		功能说明
	
			登录验证
	
		参数
			表名
			$tableName
			字段
			$value
			用户字段
			$username
			密码字段
			$password
			用户的值
			$unamev
			密码的值
			$pnamev
		
		调用方法
		
			$uname = "u1";
			$pname = "p2";
			// isset()函数 一般用来检测变量是否设置 
			if(isset($_POST["submit"]) && $_POST["submit"] == "登陆")  
			{
				echo "成功<br/>";
				$uname =  $_POST['username'];
				$pname = $_POST['password']; 
			}

			$tableName_01 = "user";
			$db->uPost($tableName_01,"*","username","password",$uname,$pname);
			$db->uPost($tableName_01,"username,password","username","password",$uname,$pname);
			$db->dbClose();	
	
	*/
	function uPost($tableName,$value,$username,$password,$unamev,$pnamev)
	{
		$user = $unamev;  
		$pasw = $pnamev;  
		if($user == "" || $pasw == "")
		{
			echo "<script>alert('请输入用户名或密码！'); history.go(-1);</script>";
		}
		else
		{
			//echo "user==".$user."<br/>";
			//echo "pasw==".$pasw."<br/>"; 
			$sql = "select $value from $tableName where $username = '$user' and $password = '$pasw'";
			$result = mysql_query($sql);
			//echo $result."<br/>";
			$num = mysql_num_rows($result);
			
			if($num)
			{
				$row = mysql_fetch_array($result);  //将数据以索引方式储存在数组中
				/*
					$array=explode(separator,$string); 
					$string=implode(glue,$array);
				*/
				//echo implode("-", $row).'<br />';
				$num = count($row);
				//echo $num.'<br />';
				for($i=0;$i<$num/2;++$i){
					//echo $row[$i].'<br />';
				}
				echo "查询到用户的信息<br/>";
			}
			else
			{
				echo "<script>alert('用户名或密码不正确！');history.go(-1);</script>";
			}
		}  
	}
	/*
		时间
		
			2017年3月31日
		
		功能说明
	
			查询数据返回JSON
		
		调用方法
			
			$a_json = $db->queryAlJson("*",$tableName);
			echo json_decode($a_json);
	*/
	function queryAlJson($value,$tableName)
	{
		$sql="SELECT ".$value." FROM ".$tableName;//SELECT * 这个方法效率不高
		$res=mysql_query($sql);
		$deresult = $this->desc($tableName);
		$drow = $drows = array();
		while( $drow = mysql_fetch_assoc($deresult)){
			$drows[] = $drow['Field'];
		}
		//var_dump($drows);
		//echo "<br/>";
		
		$output = array();
		//while($row = mysql_fetch_row($res))
		while($row = mysql_fetch_assoc($res))
		{
			$di = 0;
			$item = array();
			//$output[]=$row;
			//echo "数据长度==".count($row)."<br/>";
			foreach ($row as $col_value)
			{
				$item[$drows[$di]]=$col_value; 
				//echo "$col_value<br/>";
				$di++;
			}
			$output[]=$item;
			
		}
		$json= json_encode($output);
		//echo $json."<br/>";
		
		return json_encode($json);
	}
	/*
		时间
		
			2017年3月24日
	
		功能说明
	
			选取最大的ID值
	
		参数
			ID
			$value
			表名
			$tableName
		
		调用方法
		
			$mid = $db->selectmid('use_id',$tableName_01);
	*/
	function selectmid($value,$tableName)
	{
		$mid = $this->query("select max($value) from $tableName");
		/*
			定义和用法
				mysql_fetch_row() 函数从结果集中取得一行作为数字数组。
		*/
		if($row = mysql_fetch_row($mid))
		{
			$mid=$row[0];
		}
		return $mid;
	}
	/*
		时间
		
			2017年3月24日
	
		功能说明
	
			选取最大的ID值
		
		调用方法
			$check_query = $db->select("id","user","where username='$rusername' limit 1");
	*/
	function select($value,$tableName,$condition){
		//echo "用户登录验证";
		return $this->query("SELECT $value FROM $tableName $condition");
	}
	/*
		时间
		
			2017年3月29日
	
		功能说明
	
			更新数据
		
		调用方法
			$uid =  $_SESSION['userid'];
			$db->update($tableName_02,"uid='$uid'","where id='$uid'");
	*/
	
	function update($tableName,$change,$condition){
		$this->query("UPDATE ".$tableName." SET ".$change." ".$condition);
	}
}


?>
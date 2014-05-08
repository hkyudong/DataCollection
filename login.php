<?php
error_reporting(E_ALL);
header('Content-Type: text/html; charset=UTF-8');
session_start(); 
require_once ("config.php");
$file=fopen("log.txt","a");
//数据库连接相关
  require_once ("config.php");
  $con = mysql_connect($DB_HOST,$DB_USER,$DB_PASSWORD);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db($DB_NAME, $con); 
mysql_query("set names 'utf8'");

//$username = $_POST["username"];
//$password = $_POST["password"];
$_SESSION['username']=$_POST["username"];
$_SESSION['password']=$_POST["password"];
$username = $_SESSION["username"];
$password = $_SESSION["password"];
$result = mysql_query("SELECT * FROM user WHERE username='$username'");
//$row = mysql_fetch_array($result);

while($row = mysql_fetch_array($result))
  {
  fputs($file,$row['ID']);
  fputs($file,$row['username']);
  fputs($file,$row['password']);
  fputs($file,$_SESSION['username']);
  fputs($file,$_SESSION['password']);

  //echo "<script>location.href='index.php';</script>"; 
  if ($row['password'] == $_SESSION['password'] && $row['username'] == $_SESSION['username']) {
	//登陆成功
	fputs($file,"用户名密码正确");
	//echo "<script>alert('提交成功');</script>";
	if(!isset($_SESSION['userID'])){
       $_SESSION['userID'] = $row['ID'];
    }
	
	fputs($file,$_SESSION['userID']);
	$_session['passed']=false;
    $_session['username']="";
    header("location:index.php");
    exit;
	//echo "<script>location.href='index.php';</script>"; 
	}else{
			//echo "登录失败";
			header("location:index.php");
			exit;
			//require_once ("index.php");
		}
  }

fclose($file);
mysql_close($con);
?>

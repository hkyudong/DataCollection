<?php
header('Content-Type: text/html; charset=UTF-8');
session_start(); 
//$_SESSION['id'] = rand(1,100);
//数据库连接相关
  require_once ("../config.php");
  $con = mysql_connect($DB_HOST,$DB_USER,$DB_PASSWORD);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db($DB_NAME, $con); 
mysql_query("set names 'utf8'"); 

$file=fopen("log.txt","a");
//$total=0;

// 数据处理代码
//$imgURL =array('','','','');
$IMINFOID = $_POST["IMINFOID"];
$IM_PER_NAME = $_POST["IM_PER_NAME"];
$IM_PER_SEX = $_POST["IM_PER_SEX"];
$IM_PER_IDCARD = $_POST["IM_PER_IDCARD"];
$IM_PER_BIRTHDAY = $_POST["IM_PER_BIRTHDAY"];
$IM_PER_ETHNIC = $_POST["IM_PER_ETHNIC"];
$IM_PER_DEGREE = $_POST["IM_PER_DEGREE"];
$IM_PER_PHONE = $_POST["IM_PER_PHONE"];
$IM_SOURCE_INCOME = $_POST["IM_SOURCE_INCOME"];
$IM_RELOCATION_TYPE = $_POST["IM_RELOCATION_TYPE"];
$IM_APPROVAL_UNITS = $_POST["IM_APPROVAL_UNITS"];
$IM_APPROVAL_DATE = $_POST["IM_APPROVAL_DATE"];
$IM_APPROVAL_NUM = $_POST["IM_APPROVAL_NUM"];
$ADDID = $_POST["ADDID"];
$IM_ORIGINAL_ADDRESS = $_POST["IM_ORIGINAL_ADDRESS"];
$IM_BUILDING_TYPE = $_POST["IM_BUILDING_TYPE"];
$IM_BUILDING_OTHER = $_POST["IM_BUILDING_OTHER"];
$IM_BUILDING_AREA = $_POST["IM_BUILDING_AREA"];
$IM_HOMESTEAD_AREA = $_POST["IM_HOMESTEAD_AREA"];
$IM_IS_RECLAMATION = $_POST["IM_IS_RECLAMATION"];
$VILLAGE_OPINIONS = $_POST["VILLAGE_OPINIONS"];


  if ($_FILES["file"]["error"] > 0){
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
  }else{
    if (file_exists("upload/" . $_FILES["file"]["name"])){
      echo $_FILES["file"]["name"] . " already exists. ";
    }else{
      $IM_APPROVAL_PHOTO = $IMINFOID. ".jpg";
      move_uploaded_file($_FILES["file"]["tmp_name"], "img/" .$IM_APPROVAL_PHOTO);
      //插入数据库
      //echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
    }
  }
 
  
  
  fputs($file,$IMINFOID);
  fputs($file,$IM_PER_SEX);
  fputs($file,$IM_IS_RECLAMATION);
  fputs($file,$IM_APPROVAL_PHOTO);
  mysql_query("INSERT INTO im_per (IMINFOID, IM_PER_NAME, IM_PER_SEX, IM_PER_IDCARD, IM_PER_BIRTHDAY, IM_PER_ETHNIC, IM_PER_DEGREE, IM_PER_PHONE,IM_SOURCE_INCOME,IM_RELOCATION_TYPE,IM_APPROVAL_UNITS,IM_APPROVAL_DATE,IM_APPROVAL_NUM,ADDID,IM_ORIGINAL_ADDRESS,IM_BUILDING_TYPE,IM_BUILDING_OTHER,IM_BUILDING_AREA,IM_HOMESTEAD_AREA,IM_IS_RECLAMATION,IM_APPROVAL_PHOTO,VILLAGE_OPINIONS) 
      VALUES ('$IMINFOID', '$IM_PER_NAME', '$IM_PER_SEX', '$IM_PER_IDCARD', '$IM_PER_BIRTHDAY', '$IM_PER_ETHNIC', '$IM_PER_DEGREE', '$IM_PER_PHONE','$IM_SOURCE_INCOME','$IM_RELOCATION_TYPE','$IM_APPROVAL_UNITS','$IM_APPROVAL_DATE','$IM_APPROVAL_NUM','$ADDID','$IM_ORIGINAL_ADDRESS','$IM_BUILDING_TYPE','$IM_BUILDING_OTHER','$IM_BUILDING_AREA','$IM_HOMESTEAD_AREA','$IM_IS_RECLAMATION','$IM_APPROVAL_PHOTO','$VILLAGE_OPINIONS')");
  //fputs($file,"序号：". $_SESSION['imgURL'][0].$_SESSION['imgURL'][1].$_SESSION['imgURL'][2].$DB_NAME);
  
  session_destroy();

  fclose($file);
  mysql_close($con);
?>
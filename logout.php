<?php
header('Content-Type: text/html; charset=UTF-8');
session_start(); 
unset($_SESSION['username']); 
unset($_SESSION['password']); 
unset($_SESSION['userID']); 
session_destroy();
header("location:http://192.168.191.1/datacollection/index.php");
?>
<?php
header('Content-Type: text/html; charset=UTF-8');
session_start(); 
require_once ("config.php");
//$_SESSION['userID'] = "007";
if ($_SESSION['userID'] == null) {
  //如果未登录则输出登录框
?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
</head>
<body>

<div data-role="page">
  <div data-role="header">
  <h1>请先登录</h1>
  </div>
  <div data-role="content">
    <form method="post" action="login.php">
      <div data-role="fieldcontain">
        <label for="username">用户名：</label>
        <input type="text" name="username" id="username" placeholder="你的数据系统账号">       
        <label for="psw">密码：</label>
        <input type="text" name="password" id="password" placeholder="密码">
      </div>
      <input type="submit" data-inline="true" value="提交">
    </form>
  </div>
</div>

</body>
</html>

<?php
} else {
//输出登录后的代码
?>
  
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css">
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
</head>
<body>

<div data-role="page">
  <div data-role="header" data-position="fixed">
  <h1>当前用户id：<?php echo $_SESSION['userID']; ?></h1>
  <a href="logout.php" data-role="button" class="ui-btn-right" >退出</a>
  </div>
  <div data-role="content">
    页面内容



  </div>
  <div data-role="footer" data-position="inline">
    <div align="center"><input type="button" id="" value=" 提 交 "  onclick="tj();"></div>
  </div>
</div>

</body>
</html>

<?php
}
?>
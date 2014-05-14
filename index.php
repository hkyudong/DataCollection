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

<script type="text/javascript" src="js/cordova.js" charset="utf-8"></script>
<script type="text/javascript" src="js/cameraAndupload.js" charset="utf-8"></script>

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

<script type="text/javascript" src="js/cordova.js" charset="utf-8"></script>
<script type="text/javascript" src="js/cameraAndupload.js" charset="utf-8"></script>

</head>
<body>

<div data-role="page">
  <div data-role="header" data-position="fixed">
  <h1>当前用户id：<?php echo $_SESSION['userID']; ?></h1>
  <a href="logout.php" data-role="button" class="ui-btn-right" >退出</a>
  </div>
  <div data-role="content">
    页面内容
    <form method="post" action="demoform.asp">
      <label for="IMINFOID" >安置点ID：</label>
      <input type="text" name="IMINFOID" id="IMINFOID">
      <label for="IM_PER_NAME" >户主姓名：</label>
      <input type="text" name="IM_PER_NAME" id="IM_PER_NAME" >
      <label for="IM_PER_SEX" >户主性别：</label>
        <select name="IM_PER_SEX" id="IM_PER_SEX">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      <label for="IM_PER_IDCARD" >户主身份证号：</label>
      <input type="text" name="IM_PER_IDCARD" id="IM_PER_IDCARD" >
      <label for="IM_PER_BIRTHDAY">户主出生年月：</label>
      <input type="date" name="IM_PER_BIRTHDAY" id="IM_PER_BIRTHDAY" >
      <label for="IM_PER_ETHNIC" >户主民族：</label>
      <input type="text" name="IM_PER_ETHNIC" id="IM_PER_ETHNIC" >
      <label for="IM_PER_DEGREE" >户主文化程度：</label>
      <input type="text" name="IM_PER_DEGREE" id="IM_PER_DEGREE" >
      <label for="IM_PER_PHONE" >户主联系方式：</label>
      <input type="text" name="IM_PER_PHONE" id="IM_PER_PHONE" >
      <label for="IM_SOURCE_INCOME" >农户家庭收入来源：</label>
      <input type="text" name="IM_SOURCE_INCOME" id="IM_SOURCE_INCOME" >
      <label for="IM_RELOCATION_TYPE" >搬迁类型：</label>
      <input type="text" name="IM_RELOCATION_TYPE" id="IM_RELOCATION_TYPE" >
      <label for="IM_APPROVAL_UNITS" >移民搬迁审批机关：</label>
      <input type="text" name="IM_APPROVAL_UNITS" id="IM_APPROVAL_UNITS" >
      <label for="IM_APPROVAL_DATE" >移民搬迁审批日期：</label>
      <input type="date" name="IM_APPROVAL_DATE" id="IM_APPROVAL_DATE" >
      <label for="IM_APPROVAL_NUM" >移民搬迁审批文件号：</label>
      <input type="text" name="IM_APPROVAL_NUM" id="IM_APPROVAL_NUM" >
      <label for="ADDID" >原住址地域ID：</label>
      <input type="text" name="ADDID" id="ADDID" >
      <label for="IM_ORIGINAL_ADDRESS" >原址住址（全地址）：</label>
      <input type="text" name="IM_ORIGINAL_ADDRESS" id="IM_ORIGINAL_ADDRESS" >
      <label for="IM_BUILDING_TYPE">原址房屋情况：</label>
      <input type="text" name="IM_BUILDING_TYPE" id="IM_BUILDING_TYPE" >
      <label for="IM_BUILDING_OTHER" >房屋情况其它：</label>
      <input type="text" name="IM_BUILDING_OTHER" id="IM_BUILDING_OTHER" >
      <label for="IM_BUILDING_AREA" >原址建筑面积：</label>
      <input type="text" name="IM_BUILDING_AREA" id="IM_BUILDING_AREA" >
      <label for="IM_HOMESTEAD_AREA" >原址宅基地面积：</label>
      <input type="text" name="IM_HOMESTEAD_AREA" id="IM_HOMESTEAD_AREA" >
      <label for="IM_IS_RECLAMATION" >原址是否具有复垦条件：</label>
      <input type="text" name="IM_IS_RECLAMATION" id="IM_IS_RECLAMATION" >
      <label> 搬迁前房屋以及住户照片：</label>
      <button onclick="capturePhotoz();">拍照</button>
      <img style="display:none;width:130px;height:80px;" id="smallImagesz" class="imgshow" src="">
      <label for="VILLAGE_OPINIONS" >村委会意见：</label>
      <input type="text" name="VILLAGE_OPINIONS" id="VILLAGE_OPINIONS" >

      <input type="submit" data-inline="true" value="提交">
    </form>


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
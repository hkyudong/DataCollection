var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var args = {};

// Wait for Cordova to connect with the device

document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
function onDeviceReady() {
  alert("PhoneGap设备初始化完毕！");
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {

  var smallImage = document.getElementById('IM_APPROVAL_PHOTO');
  alert(imageData);

  smallImage.style.display = 'block';

  //smallImage.src = "data:image/jpeg;base64," + imageData;
   window.resolveLocalFileSystemURI(imageData,function(imageFileEntry)
	  {
  	  imageFileEntry.file(function(imageFile)
	  {
  		  var reader = new FileReader ();
            
            reader.onload = function(evt) 
            {
          	  //alert(evt.target.result);
          	  smallImage.src = evt.target.result;
         	  };
            
            reader.readAsDataURL(imageFile);
	  });
	  });
   
  args.photoURL = imageData;
}


function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 60,
    destinationType: destinationType.FILE_URL });
}

function onFail(message) {
  //alert('Failed because: ' + message);
}

function tj()
{
	var doc = document;
	
	var IMINFOID = "";//安置点ID
	var IM_PER_NAME = "";//户主姓名
	var IM_PER_SEX = "";//户主性别
	var IM_PER_IDCARD = "";//户主身份证号
	var IM_PER_BIRTHDAY = "";//户主出生年月
  var IM_PER_ETHNIC = "";//户主民族
  var IM_PER_DEGREE = "";//户主文化程度
  var IM_PER_PHONE = "";//户主联系方式
  var IM_SOURCE_INCOME = "";//农户家庭收入来源
  var IM_RELOCATION_TYPE = "";//搬迁类型
  var IM_APPROVAL_UNITS = "";//移民搬迁审批机关
  var IM_APPROVAL_DATE = "";//移民搬迁审批日期
  var IM_APPROVAL_NUM = "";//移民搬迁审批文件号
  var ADDID = "";//原住址地域ID
  var IM_ORIGINAL_ADDRESS = "";//原址住址（全地址）
  var IM_BUILDING_TYPE = "";//原址房屋情况
  var IM_BUILDING_OTHER = "";//房屋情况其它
  var IM_BUILDING_AREA = "";//原址建筑面积
  var IM_HOMESTEAD_AREA = "";//原址宅基地面积
  var IM_IS_RECLAMATION = "";//原址是否具有复垦条件
  var IM_APPROVAL_PHOTO = "";//搬迁前房屋以及住户照片
  var VILLAGE_OPINIONS = "";//村委会意见


  IMINFOID = doc.getElementById("IMINFOID").value;
	alert(IMINFOID);

  IM_PER_NAME = doc.getElementById("IM_PER_NAME").value;
  IM_PER_SEX = doc.getElementById("IM_PER_SEX").value;
  IM_PER_IDCARD = doc.getElementById("IM_PER_IDCARD").value;
  IM_PER_BIRTHDAY = doc.getElementById("IM_PER_BIRTHDAY").value;
  IM_PER_ETHNIC = doc.getElementById("IM_PER_ETHNIC").value; 
  IM_PER_DEGREE = doc.getElementById("IM_PER_DEGREE").value;
  IM_PER_PHONE = doc.getElementById("IM_PER_PHONE").value;
  IM_SOURCE_INCOME = doc.getElementById("IM_SOURCE_INCOME").value;  
  IM_RELOCATION_TYPE = doc.getElementById("IM_RELOCATION_TYPE").value;

  alert(IM_PER_SEX);

  IM_APPROVAL_UNITS = doc.getElementById("IM_APPROVAL_UNITS").value;
  IM_APPROVAL_DATE = doc.getElementById("IM_APPROVAL_DATE").value;
  IM_APPROVAL_NUM = doc.getElementById("IM_APPROVAL_NUM").value;
  ADDID = doc.getElementById("ADDID").value; 
  IM_ORIGINAL_ADDRESS = doc.getElementById("IM_ORIGINAL_ADDRESS").value;  
  IM_BUILDING_TYPE = doc.getElementById("IM_BUILDING_TYPE").value;
  IM_BUILDING_OTHER = doc.getElementById("IM_BUILDING_OTHER").value;
  IM_BUILDING_AREA =doc.getElementById("IM_BUILDING_AREA").value;
  IM_HOMESTEAD_AREA = doc.getElementById("IM_HOMESTEAD_AREA").value;
  IM_IS_RECLAMATION = doc.getElementById("IM_IS_RECLAMATION").value;

  alert(IM_IS_RECLAMATION);

  IM_APPROVAL_PHOTO = args.photoURL;

  alert(IM_APPROVAL_PHOTO);

  VILLAGE_OPINIONS = doc.getElementById("VILLAGE_OPINIONS").value;

  //var imageURI = [];//图片文件路径
  //var imageFileName = ["1","2","3","4"];
  var options = new FileUploadOptions();
  options.fileKey = "file";
  options.mimeType = "image/jpeg";
  options.chunkedMode = false;
  
  var url = "http://192.168.191.1/datacollection/upload/upload_file.php";
  var ft = new FileTransfer();
  // 上传回调    
  ft.onprogress = showUploadingProgress;
  navigator.notification.progressStart("", "提交进度");
  
  options.fileName = IM_APPROVAL_PHOTO.substr(IM_APPROVAL_PHOTO.lastIndexOf('/')+1);
  var params = {};

  params.IMINFOID = IMINFOID;
  params.IM_PER_NAME = IM_PER_NAME;
  params.IM_PER_SEX = IM_PER_SEX;
  params.IM_PER_IDCARD = IM_PER_IDCARD;
  params.IM_PER_BIRTHDAY = IM_PER_BIRTHDAY;
  params.IM_PER_ETHNIC = IM_PER_ETHNIC;
  params.IM_PER_DEGREE = IM_PER_DEGREE;
  params.IM_PER_PHONE = IM_PER_PHONE;
  params.IM_SOURCE_INCOME = IM_SOURCE_INCOME;
  params.IM_RELOCATION_TYPE = IM_RELOCATION_TYPE
  params.IM_APPROVAL_UNITS = IM_APPROVAL_UNITS;
  params.IM_APPROVAL_DATE = IM_APPROVAL_DATE;
  params.IM_APPROVAL_NUM = IM_APPROVAL_NUM;
  params.ADDID = ADDID;
  params.IM_ORIGINAL_ADDRESS = IM_ORIGINAL_ADDRESS;
  params.IM_BUILDING_TYPE = IM_BUILDING_TYPE;
  params.IM_BUILDING_OTHER = IM_BUILDING_OTHER;
  params.IM_BUILDING_AREA = IM_BUILDING_AREA;
  params.IM_HOMESTEAD_AREA = IM_HOMESTEAD_AREA;
  params.IM_IS_RECLAMATION = IM_IS_RECLAMATION;
  params.VILLAGE_OPINIONS = VILLAGE_OPINIONS;


  options.params = params; 
  ft.upload(IM_APPROVAL_PHOTO, url, win, fail, options);

}
   // 显示上传进度
function showUploadingProgress( progressEvt )
  {
    if( progressEvt.lengthComputable )
    {
        navigator.notification.progressValue( Math.round( ( progressEvt.loaded / progressEvt.total ) * 100) );
    }
}

function win(r)
{
  //进度完成
  navigator.notification.progressStop();
  navigator.notification.alert("提交成功!",null,"成功提示","确定");
  
  //清楚图片缓存效果不好
/*  window.resolveLocalFileSystemURI(IM_APPROVAL_PHOTO, function( fileEntry ){
            fileEntry.remove();
        }, null);*/
    //console.log("Code = "+ r.responseCode);
    //console.log("Response = "+ r.response);
    //console.log("Sent = "+ r.bytesSent);
}



function fail(error)
{
  //进度停止 
  navigator.notification.progressStop();

  if(error.code == 1)
  {
    navigator.notification.alert("服务器错误!",null,"错误提示","确定");  
  }
  else if(error.code == 3)
  {
    navigator.notification.alert("网络错误!",null,"错误提示","确定");
  }
  else
  {
    navigator.notification.alert("发生错误"+error.code,null,"错误提示","确定");
  }
}

var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var args = {};

// Wait for Cordova to connect with the device

document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
function onDeviceReady() {
  alert("deviceready");
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {

  var smallImage = document.getElementById('smallImage');
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
   
  args.hjbz = imageData;
}

function onPhotoDataSuccesss(imageData) {
    var smallImage = document.getElementById('smallImages');

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
    
    args.zfwt = imageData;
  }
function onPhotoDataSuccesssx(imageData){
    var smallImage = document.getElementById('smallImagesx');

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
    
    args.wtx = imageData;
  }

function onPhotoDataSuccesssz(imageData){
    var smallImage = document.getElementById('smallImagesz');

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
     
    //smallImage.src = imageURI;
    args.mtz = imageData;
  }

function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 60,
    destinationType: destinationType.FILE_URL });
}

function capturePhotos() {
    navigator.camera.getPicture(onPhotoDataSuccesss, onFail, { quality: 60,
      destinationType: destinationType.FILE_URL });
  }

function capturePhotosx(){
    navigator.camera.getPicture(onPhotoDataSuccesssx, onFail, { quality: 60,
        destinationType: destinationType.FILE_URL });
   }
function capturePhotoz(){
    navigator.camera.getPicture(onPhotoDataSuccesssz, onFail, { quality: 60,
        destinationType: destinationType.FILE_URL });
   }

function onFail(message) {
  //alert('Failed because: ' + message);
}

function tj()
{
	var doc = document;
	
	var mt = "";//实体店门头
	var ty = "";//体验演示
	var jy = "";//您的建议
	var mtz = "";//门头照片
	var wtx = "";//存在的问题照片
	var hjbz = "";//店内环境和宣传布置照片
	var zfwt = "";//好的做法
	var zfwt_sm = "";//好的做法照片的说明
	
	var mt_temp = doc.getElementsByName("mt");
	for(var i=0;i<mt_temp.length;i++)
	{
		if(mt_temp[i].checked)
		{
			mt = mt_temp[i].value;
			break;
		}
	}
	
	var ty_temp = doc.getElementsByName("ty");
	for(var j=0;j<ty_temp.length;j++)
	{
		if(ty_temp[j].checked)
		{
			if(ty == "")
			{
				ty = ty_temp[j].value;
			}
			else
			{
				ty += "-" +ty_temp[j].value;
			}
		}
	}
	
	jy = doc.getElementById("jy").value;
	
	//hjbz = doc.getElementById("smallImage").value;
	//hjbz = hjbz.subString(22);
	hjbz = args.hjbz;
	
	//zfwt = doc.getElementById("smallImages").value;
	//zfwt = zfwt.subString(22);
	mtz = args.mtz;
	wtx = args.wtx;
	zfwt = args.zfwt;
	
	zfwt_sm = doc.getElementById("zfwt_sm").value;
	
	var imageURI = [];//图片文件路径
	//var imageFileName = ["门头照片","店内环境和宣传布置照片","存在的问题照片","好的做法"];//图片文件名称
	var imageFileName = ["1","2","3","4"];
  imageURI.push(mtz);
	imageURI.push(hjbz);
	imageURI.push(wtx);
	imageURI.push(zfwt);
	
	var options = new FileUploadOptions();
	options.fileKey = "file";
	//options.fileName = hjbz.substr(hjbz.lastIndexOf('/')+1);
	options.mimeType = "image/jpeg";
	//options.mimeType = "text/plain";
	//options.mimeType = "multipart/form-data";
	options.chunkedMode = false;
	
	/*
	showScreen("massage_box","lockScreen");
	
	   $.ajax({
   		type: "POST",
   		url: "http://172.16.73.35:8088/bonc-mobile/mobile/PhoneGap!test.action",
   		data: params,
   		success: function(msg){
   			//hideScreen("massage_box","lockScreen");
		//alert("提交成功!");
   		}
   	});
		*/
	   
	//options.params = params;
	  
	var url = "http://192.168.191.1/xundian/upload/upload_file.php";
	var ft = new FileTransfer();
	// 上传回调
      ft.onprogress = showUploadingProgress;
      navigator.notification.progressStart("", "提交进度");
      
      for(var i=0;i<imageURI.length;i++)
      {
      	var params = {};
        options.fileName = imageURI[i].substr(imageURI[i].lastIndexOf('/')+1);
      	params.imgNum = imageFileName[i];
      	
      	if(i == imageURI.length-1)
      	{
      		options.params = params;
          	ft.upload(imageURI[i], url, win, fail, options);//encodeURI(url)
      	}
      	else if(i == 0)
      	{
      		params.mt = mt;
      		params.ty = ty;
      		params.jy = jy;
      		params.zfwt_sm = zfwt_sm;
      		
      		options.params = params;
      		
      		ft.upload(imageURI[i], url, null, fail, options);//encodeURI(url)
      	}
      	else
      	{
      		options.params = params;
      		ft.upload(imageURI[i], url, null, fail, options);//encodeURI(url)
      	}
      }
	
	//alert("实体店门头: "+mt);
	//alert("体验演示: "+ty);
	//alert("您的建议: "+jy);
	//alert("店内环境和宣传布置照片: "+hjbz);
	//alert("好的做法和存在的问题照片: "+zfwt);
	//alert("照片的说明: "+zfwt_sm);
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
  for (var i = 0; i <= imageURI.length-1; i++) {
    window.resolveLocalFileSystemURI(imageURI[i], function( fileEntry ){
            fileEntry.remove();
        }, null);
  };
    //console.log("Code = "+ r.responseCode);
    //console.log("Response = "+ r.response);
    //console.log("Sent = "+ r.bytesSent);
}

function wins(r)
{
  //进度完成
  navigator.notification.progressStop();
  //navigator.notification.alert("提交成功!",null,"成功提示","确定");
  
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
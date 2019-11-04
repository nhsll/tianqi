function GetAjax(httpUrl,callBackFn){
			//创建hxr
			var xhr = new XMLHttpRequest()
			//设置请求的方法和路径
			xhr.open("GET",httpUrl)
			//发送数据
			xhr.send()
			//监听后台是否返回数据
			xhr.onreadystatechange = function(){
				if(xhr.status==200&&xhr.readyState==4){
					console.log("成功获得数据")
					//处理数据
					callBackFn(xhr);
				}
			}
		}
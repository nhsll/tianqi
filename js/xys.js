(function(){
		function lcXys(){
			var html = document.querySelector("html")
			var userAgent = navigator.userAgent
			html.className = ''
			//通过userAgent.indexOf("iphone") ,去获取iPhone在字符串中的索引值
			if(userAgent.indexOf("iPhone")!=-1){
				html.classList.add("iPhone")
			}else if(userAgent.indexOf("Android")!=-1){
				html.classList.add("Android")
			}else if(userAgent.indexOf("iPad")!=-1){
				html.classList.add("iPad")
			}else{
				html.classList.add("pc")
			}
			//根据widow.width，即屏幕的宽度来判断添加css样式
			if(window.width<640){
				html.classList.add("it640")
				html.classList.add("it960")
				html.classList.add("it1200")
			}else if(window.width<960){
				html.classList.add("gt640")
				html.classList.add("it960")
				html.classList.add("it1200")
			}else if(window.width<1200){
				html.classList.add("gt640")
				html.classList.add("gt960")
				html.classList.add("it1200")
			}else{
				html.classList.add("gt640")
				html.classList.add("gt960")
				html.classList.add("gt1200")
			}
			
			//rem布局
			var screenWidth = window.innerWidth
			//屏幕宽度/设计稿占满全屏的宽度为多少rem
			var danwei = screenWidth/3.75
			var html = document.querySelector("html")
			html.style.fontSize = danwei + 'px';
		}
		
		lcXys();
			
		window.onresize = function(){
			lcXys()
		}
})()

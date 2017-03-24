//rem部分
!function(vWidth){
	function Adp(){	
		if(window.orientation==180||window.orientation==0){
	  		var w=Math.min(window.innerHeight,document.documentElement.clientHeight);
	   	} 
		if(window.orientation==90||window.orientation==-90){ 
        	var w=Math.min(window.innerWidth,document.documentElement.clientWidth);  
	    } 
		if(w>vWidth){
			w=vWidth;
		}
		if(!window.orientation){
			//检测不到横竖屏切换自己处理
		}
		document.documentElement.style.fontSize=w/vWidth*100+"px"
}
var timer=null;
window.addEventListener("onorientationchange" in window?"orientationchange":"resize",function(){clearTimeout(timer);timer=setTimeout(Adp,300)},false);
window.addEventListener("pageshow",function(window){window.persisted&&(clearTimeout(timer),timer=setTimeout(Adp,300))},false);
document.addEventListener("DOMContentLoaded",Adp,false)
}(1334);//宽

//旋转部分
function hengshuping(){ 
  	if(window.orientation==180||window.orientation==0){
    	$('.container').css('-webkit-transform','rotateZ('+window.orientation+90+'deg)')
    	.css('transform','rotateZ('+window.orientation+90+'deg)')
   	} 
	if(window.orientation==90||window.orientation==-90){ 
        $('.container').css('-webkit-transform','rotateZ(0deg)')
    	.css('transform','rotateZ(0deg)')
    } 
}
hengshuping()
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 

//注：页面主体内容部分需要配合超出居中样式
//.wrapper{
//	margin-left:50%;
//}
//.main{
//	margin-left:-50%;
//}
//
//
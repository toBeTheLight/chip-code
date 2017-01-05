'use strict'
let elWrap = document.getElementsByClassName('wrap')[0];
//wrap位置修正
function elWrapPosition() {
	let elWrapLeft = document.body.clientWidth / 2 - 100,
	elWrapTop = document.body.clientHeight / 2 - 100,
	elWrapPositionText = 'left:' + elWrapLeft + 'px;top:' + elWrapTop + 'px';
	elWrap.setAttribute('style', elWrapPositionText);
}
window.addEventListener('resize', elWrapPosition, false)
elWrapPosition();

//右键旋转wrap
let elBody = document.body;
let startX,startY;
elBody.addEventListener('mousedown',function(ev){
	let e = ev||event;
	startX = e.clientX;
	startY = e.clientY;
	elBody.addEventListener('mousemove',rotateWrap,false);
},false);
function rotateWrap(ev){
	let e = ev||event;
	let nowX = e.clientX;
	let nowY = e.clientY;
	let moveX = nowX - startX;
	let moveY = nowY - startY;
	//做角度转换
}

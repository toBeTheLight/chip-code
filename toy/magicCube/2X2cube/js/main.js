'use strict'
let elWrap = document.getElementsByClassName('wrap')[0];
//wrap位置修正
function elWrapPosition() {
	elWrap.style.transitionDuration = '0s';
	console.log(elWrap.style.transitionDuration)
	let elWrapLeft = document.body.clientWidth / 2 - 100,
	elWrapTop = document.body.clientHeight / 2 - 100,
	elWrapPositionText = 'left:' + elWrapLeft + 'px;top:' + elWrapTop + 'px';
//	elWrap.setAttribute('style', elWrapPositionText);
	elWrap.style.left = elWrapLeft + 'px';
	elWrap.style.top = elWrapTop + 'px';
}
window.addEventListener('resize', elWrapPosition, false)
elWrapPosition();
//初始化颜色对象
let colorObj = {
	
}
//键盘事件，固定角度旋转
let rotateWrap = (ev)=>{
	//恢复transition效果
	elWrap.style.transition = 'all 0.3s';
	let e = ev || event;
	let x = 0,y = 0;
	switch (e.keyCode){
		case 87 :
		//按下w 上
		console.log('上');
		x = 90;
		break;
		case 83 :
		//按下s 下
		console.log('下');
		x = -90;
		break;
		case 65 :
		//按下a 左
		console.log('左');
		y = -90;
		break;
		case 68 :
		//按下d 右
		console.log('右');
		y = 90;
		break;
	}
	elWrap.transformTool('rotateX', x + elWrap.transformTool('rotateX'));
	elWrap.transformTool('rotateY', y + elWrap.transformTool('rotateY'));
}

window.addEventListener('keyup',rotateWrap,false);



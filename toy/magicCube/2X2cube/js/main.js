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

//改用键盘事件，固定角度旋转
let rotateWrap = (ev)=>{
	//恢复transition效果
	elWrap.style.transition = 'all 0.3s';
	let e = ev || event;
	let x,y,z;
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
	let transformObj = elWrap.transformTool();
	console.log(transformObj);
	//根据已有角度/90并模4简化确定现方向
	let nX = (transformObj.rotateX/90)%4;
	nX = nX<0 ? nX+4 : nX;
	let nY = (transformObj.rotateY/90)%4;
	nY = nY<0 ? nY+4 : nY;
	let nZ = (transformObj.rotateZ/90)%4;
	nZ = nZ<0 ? nZ+4 : nZ;
}

window.addEventListener('keyup',rotateWrap,false);



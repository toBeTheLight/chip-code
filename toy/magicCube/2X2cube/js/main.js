'use strict'

let elWrap = $my('wrap');
//wrap位置修正部分
(function() {
	function elWrapPosition() {
		elWrap.css('transitionDuration', '0s');
		let elWrapLeft = document.body.clientWidth / 2 - 100,
			elWrapTop = document.body.clientHeight / 2 - 100,
			elWrapPositionText = `left:${elWrapLeft}px;top:${elWrapTop}px`;
		elWrap.css('left', `${elWrapLeft}px`);
		elWrap.css('top', `${elWrapTop}px`);
	}
	window.addEventListener('resize', elWrapPosition, false)
	elWrapPosition();
})();
//////////////////////////////
//主要逻辑//
//////////////////////////////

//初始各面颜色对象
let colorOf = {
	//按照FTL FTR FBL FBR顺序对应
	face: ['deepskyblue', 'deepskyblue', 'deepskyblue', 'deepskyblue'],
	top: ['orange', 'orange', 'orange', 'orange'],
	back: ['silver', 'silver', 'silver', 'silver'],
	bottom: ['deeppink', 'deeppink', 'deeppink', 'deeppink'],
	left: ['yellow', 'yellow', 'yellow', 'yellow'],
	right: ['green', 'green', 'green', 'green']
};
//转动后新颜色对象
let colorOfTemp = {
	face: [],
	top: [],
	back: [],
	bottom: [],
	left: [],
	right: []
};

//颜色转换函数
let colorOfChange = (hashObj,index,direct,y) => {
	if(y){
		let temp0= colorOf.back[0];
		let temp1= colorOf.back[1];
		let temp2= colorOf.back[2];
		let temp3= colorOf.back[3];
		colorOf.back[0]=temp3;
		colorOf.back[1]=temp2;
		colorOf.back[2]=temp1;
		colorOf.back[3]=temp0;
	}
	colorOfTemp = JSON.parse(JSON.stringify(colorOf));
	for(let key in hashObj) {
		let key2 = hashObj[key];
		if(index === undefined) {
			for(let i = 0; i < 4; i++) {
				colorOfTemp[key][i] = colorOf[key2][i];
				if(key==key2){
					if(direct =='+'){
						colorOfTemp[key][0]=colorOf[key2][2];
						colorOfTemp[key][1]=colorOf[key2][0];
						colorOfTemp[key][2]=colorOf[key2][3];
						colorOfTemp[key][3]=colorOf[key2][1];
					}else if(direct =='-'){
						colorOfTemp[key][0]=colorOf[key2][1];
						colorOfTemp[key][1]=colorOf[key2][3];
						colorOfTemp[key][2]=colorOf[key2][0];
						colorOfTemp[key][3]=colorOf[key2][2];					
					}			
				}
			}
			
		} else {
			if(key!==key2){
				colorOfTemp[key][index[0]] = colorOf[key2][index[0]];
				colorOfTemp[key][index[1]] = colorOf[key2][index[1]];	
			}else if(key==key2){
				if(direct =='+'){
					colorOfTemp[key][0]=colorOf[key2][2];
					colorOfTemp[key][1]=colorOf[key2][0];
					colorOfTemp[key][2]=colorOf[key2][3];
					colorOfTemp[key][3]=colorOf[key2][1];
				}else if(direct =='-'){
					colorOfTemp[key][0]=colorOf[key2][1];
					colorOfTemp[key][1]=colorOf[key2][3];
					colorOfTemp[key][2]=colorOf[key2][0];
					colorOfTemp[key][3]=colorOf[key2][2];					
				}	
			}
		}
	}
			console.log(colorOf.back,colorOf.right,colorOf.face);
};
//根据转动方向与index,映射转换颜色对象
let oldColorToNew = (x,y,index,whichDelete) => {
	let hashObj = null;
	let direct ='';
	if(x) {
		if(x < 0) {
			hashObj = {
				face: 'top',
				top: 'back',
				back: 'bottom',
				bottom: 'face',
				right: 'right',
				left: 'left'
			};
			direct ='-'
		} else if(x>0){
			hashObj = {
				face: 'bottom',
				top: 'face',
				back: 'top',
				bottom: 'back',
				right: 'right',
				left: 'left'
			}
			direct ='+';
		}
	} else if(y) {
		if(y > 0) {
			hashObj = {
				face: 'left',
				right: 'face',
				back: 'right',
				left: 'back',
				top: 'top',
				bottom: 'bottom'
			}
			direct ='-';
		} else if(y<0){
			hashObj = {
				face: 'right',
				right: 'back',
				back: 'left',
				left: 'face',
				top: 'top',
				bottom: 'bottom'
			}
			direct ='+';
		};
	};
	if(whichDelete){
		delete hashObj[whichDelete];	
	}
	colorOfChange(hashObj,index,direct,y);
	colorOf = JSON.parse(JSON.stringify(colorOfTemp));
	hashObj = null;
};
//36面遍历改色
let colorOfCubeChange = (which) => {
	//待优化
	let newWhich = which.replace(/(^\w)/, function($0, $1) {
		return $1.toUpperCase()
	});
	let temps = $my(`cube${newWhich}`).doms;
	for(let i = 0; i < temps.length; i++) {
		temps[i].style.backgroundColor = colorOf[which][temps[i].getAttribute('dataIndex')];
	}
};

//wasd控制整体旋转部分
(function() {
	//键盘事件，固定角度旋转
	let rotateWrap = (ev) => {
		window.removeEventListener('keyup', rotateWrap, false);
		//恢复transition效果
		elWrap.css('transition', 'all 0.3s');
		let e = ev || event;
		let x = 0,
			y = 0;
		switch(e.keyCode) {
			case 87:
				//按下w 上
				x = 90;
				break;
			case 83:
				//按下s 下
				x = -90;
				break;
			case 65:
				//按下a 左
				y = -90;
				break;
			case 68:
				//按下d 右
				y = 90;
				break;
		}
		oldColorToNew(x,y)
		let rotateStr = `rotateX(${x}deg) rotateY(${y}deg)`;
		elWrap.css('transform', rotateStr);
		let transitionCallback = () => {
			colorOfCubeChange('face');
			colorOfCubeChange('top');
			colorOfCubeChange('right');
			colorOfCubeChange('left');
			colorOfCubeChange('back');
			colorOfCubeChange('bottom');
			elWrap.css('transition', 'all 0s');
			elWrap.css('transform', '');
			window.addEventListener('keyup', rotateWrap, false);
			console.log(colorOf.back,colorOf.right,colorOf.face);
			elWrap.doms[0].removeEventListener('transitionend', transitionCallback, false);
		}
		elWrap.on('transitionend', transitionCallback, false);
	};
	window.addEventListener('keyup', rotateWrap, false);
})();

//鼠标控制某层旋转
(function() {
	let mousedownCallback = (e) => {
		//取消默认拖拽
		let ev = e||event; 
		ev.preventDefault();
		let startX = ev.clientX;
		let startY = ev.clientY;
		let target = ev.target.getAttribute('dataIndex');
		let nth = 0
		let windowMouseUpCallback = (e)=>{
			document.removeEventListener('mouseup',windowMouseUpCallback,false);
			let ev = e || event;
			let endX = ev.clientX;
			let endY = ev.clientY;
			let x=0,y=0,index,moveX,moveY,classKeyword,whichDelete;
			
			if(Math.abs(endX - startX)>Math.abs(endY - startY)){
				//a或d
				moveX = endX - startX;
			}else{
				//w或s
				moveY = endY - startY;
			}
			if(moveX){
				if(moveX<0){
					y = -90;
				}else if(moveX>0){
					y=90;
				};
			}else if(moveY){
				if(moveY>0){
					x = -90;
				}else if(moveY<0){
					x = 90;
				}
			};
			if(target == 0){
				if(x){
					index =[0,2];
					classKeyword = 'ofLeft';
					whichDelete = 'right';
				}else if(y){
					index=[0,1];
					classKeyword = 'ofTop';
					whichDelete = 'bottom';
				};
			}else if(target == 1){
				if(x){
					index =[1,3];
					classKeyword = 'ofRight';
					whichDelete = 'left';
				}else if(y){
					index=[0,1];
					classKeyword = 'ofTop';
					whichDelete = 'bottom';
				};
			}else if(target == 2){
				if(x){
					index =[0,2];
					classKeyword = 'ofLeft';
					whichDelete = 'right';
				}else if(y){
					index=[2,3];
					classKeyword = 'ofBottom';
					whichDelete = 'top';
				};
			}else if(target == 3){
				if(x){
					index =[1,3];
					classKeyword = 'ofRight';
					whichDelete = 'left';
				}else if(y){
					index=[2,3];
					classKeyword = 'ofBottom';
					whichDelete = 'top';
				};
			};
			oldColorToNew(x,y,index,whichDelete);
			//开转
			let rotateStr = `rotateX(${x}deg) rotateY(${y}deg)`;
			let cubes = null;
			whichDelete = '';
			cubes = $my(classKeyword);
			cubes.css('transition', 'all .3s');
			cubes.css('transform', rotateStr);
			//将transition结束绑定至两个块上
			let cubeFTL = document.getElementById('cubeFTL');
			let cubeFBR = document.getElementById('cubeFBR');
			
			let cubesTranEndCallback = (ev)=>{
				let e = ev||event;
				e.stopPropagation();
				colorOfCubeChange('face');
				colorOfCubeChange('top');
				colorOfCubeChange('right');
				colorOfCubeChange('left');
				colorOfCubeChange('back');
				colorOfCubeChange('bottom');
				cubes.css('transition', 'all 0s');
				cubes.css('transform', '');
				
				cubeFTL.removeEventListener('transitionend',cubesTranEndCallback,false);
				cubeFBR.removeEventListener('transitionend',cubesTranEndCallback,false);
			}
			cubeFTL.addEventListener('transitionend',cubesTranEndCallback,false);
			cubeFBR.addEventListener('transitionend',cubesTranEndCallback,false);
			x = 0;
			y = 0;
			moveX = 0;
			moveY =0 ;
			index = null;
			classKeyword = '';
		}
		document.addEventListener('mouseup', windowMouseUpCallback, false);
		return false;
	}
	document.addEventListener('mousedown',mousedownCallback,false);
//	$my('cubeFace').on('mousedown', mousedownCallback, false)
})()
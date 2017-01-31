'use strict'

let elWrap = $my('wrap');
//wrap位置修正部分
(function() {
	function elWrapPosition() {
		elWrap.css('transitionDuration', '0s');
		console.log(elWrap.doms[0].style.transitionDuration)
		let elWrapLeft = document.body.clientWidth / 2 - 100,
			elWrapTop = document.body.clientHeight / 2 - 100,
			elWrapPositionText = `left:${elWrapLeft}px;top:${elWrapTop}px`;
		elWrap.css('left', `${elWrapLeft}px`);
		elWrap.css('top', `${elWrapTop}px`);
	}
	window.addEventListener('resize', elWrapPosition, false)
	elWrapPosition();
})();

//wasd控制整体旋转部分
(function() {
	//初始化颜色对象
	let colorOf = {
			face: 'deepskyblue',
			right: 'green',
			back: 'silver',
			left: 'yellow',
			top: 'orange',
			bottom: 'deeppink'
		},
		//键盘事件，固定角度旋转
		rotateWrap = (ev) => {
			window.removeEventListener('keyup',rotateWrap,false);
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

			let rotateStr = `rotateX(${x}deg) rotateY(${y}deg)`;
			elWrap.css('transform', rotateStr);
			//颜色更改,待优化
			let colorOfTemp = null;
			console.log(x, y);
			if(x) {
				if(x < 0) {
					colorOfTemp = {
						face: colorOf.top,
						top: colorOf.back,
						back: colorOf.bottom,
						bottom: colorOf.face,
						right: colorOf.right,
						left: colorOf.left
					}
				} else {
					colorOfTemp = {
						face: colorOf.bottom,
						top: colorOf.face,
						back: colorOf.top,
						bottom: colorOf.back,
						right: colorOf.right,
						left: colorOf.left
					}
				}
			} else if(y) {
				if(y < 0) {
					colorOfTemp = {
						face: colorOf.right,
						right: colorOf.back,
						back: colorOf.left,
						left: colorOf.face,
						top: colorOf.top,
						bottom: colorOf.bottom
					}
				} else {
					colorOfTemp = {
						face: colorOf.left,
						right: colorOf.face,
						back: colorOf.right,
						left: colorOf.back,
						top: colorOf.top,
						bottom: colorOf.bottom
					}
				};
			};
			colorOf = colorOfTemp;
			colorOfTemp = null;
			x = 0;
			y = 0;
			let transitionCallback = () => {
				$my('face').css('background-color', colorOf.face);
				$my('top').css('background-color', colorOf.top);
				$my('back').css('background-color', colorOf.back);
				$my('bottom').css('background-color', colorOf.bottom);
				$my('left').css('background-color', colorOf.left);
				$my('right').css('background-color', colorOf.right);
				elWrap.css('transition', 'all 0s');
				elWrap.css('transform', '');
				window.addEventListener('keyup', rotateWrap, false);
			}
			elWrap.on('transitionend', transitionCallback, false);
		};
	window.addEventListener('keyup', rotateWrap, false);
})();
"use strict"
let elWrap = document.getElementsByClassName('wrap')[0];
//wrap位置修正
function elWrapPosition() {
	let elWrapLeft = document.body.clientWidth / 2 - 100;
	let elWrapTop = document.body.clientHeight / 2 - 100;
	console.log(elWrapLeft, elWrapTop);
	let elWrapPositionText = 'left:' + elWrapLeft + 'px;top:' + elWrapTop + 'px';
	elWrap.setAttribute('style', elWrapPositionText);
}
window.addEventListener('resize', elWrapPosition, false)
elWrapPosition();
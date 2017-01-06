'use strict'
Element.prototype.transformTool = function(type, number) {
	if(this.transformObj === undefined) this.transformObj = {};
	let unit = '';
	if(/^(rotate|skew)/.test(type)) unit = 'deg';
	if(/^translate/.test(type)) unit = 'px';
	this.transformObj. = {};
	console.log(this)
	if(number === undefined) {
		return this.transformObj.type||0
	} else {
		this.style.transform = type + '(' + number + unit + ')';
	}
}
'use strict'
Element.prototype.transform = function(type,number){
	let unit = '';
	if(/^(rotate|skew)/.test(type))unit = 'deg';
	if(/^translate/.test(type))unit = 'px';
	this.type = number;
	if(number===undefined){
		return this.type
	}else{
		this.style.transform = type+'('+number+unit+')';
	}
	console.log(this.type)
}
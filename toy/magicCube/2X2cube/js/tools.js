'use strict'
Element.prototype.transformTool = function(type, number) {
	//初次调用，对对象添加数据保存对象
	if(this.transformObj === undefined) this.transformObj = {};
	//未传入number参数，则按照查询处理
	if(number === undefined) {
		//对应变换类型不存在，直接返回0
		if(this.transformObj[type]===undefined){
			return 0
		//对应变换类型存在，返回保存值
		}else{
			return this.transformObj[type].value;	
		}
	} else {
	//进行单位判断
	let unit = '';
	if(/^(rotate|skew)/.test(type)) unit = 'deg';
	if(/^translate/.test(type)) unit = 'px';
	//将欲设置值保存至数据保存对象
	this.transformObj[type] = {
		value:number,
		unit:unit
	};
	//遍历数据保存对象拼接transform字符串
	let transformStr = '';
	for(let tempType in this.transformObj){
		let tempObj = this.transformObj[tempType];
		transformStr += ' ' + tempType + '(' + tempObj.value + tempObj.unit +')';
	}
	//进行完整样式设置
	this.style.transform = transformStr;
	}
}
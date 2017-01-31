(function(window) {
	'use strict'
	//初步先完成类名选择器
	window.$my = (className) => {
		return(new MyTools(className));
	}
	class MyTools {
		constructor(className) {
			this.doms = document.documentElement.getElementsByClassName(className);
		}
		css(name, value) {
			for(let i = 0; i < this.doms.length; i++) {
				this.doms[i].style[name] = value;
			}
		}

		on(event,fn,bub){
			for(let i = 0;i<this.doms.length;i++){
				this.doms[i].addEventListener(event,fn,bub);
			};
		}
		transformTool(type, number) {
			//transformTool使用说明：
			//用于transform连续变换，单次变化可使用css
			//未传入参数则返回保存对象
			//传入一个参数为获取对应值
			//传入两个参数为设置对应值
			for(let i = 0; i < this.doms.length; i++) {
				//初次调用，对对象添加数据保存对象
				let thisDoms = this.doms; 
				if(thisDoms[i].transformObj === undefined) {
					thisDoms[i].transformObj = {}
				};
				if(type === undefined) {
					return thisDoms[i].transformObj;
					//未传入number参数，则按照查询处理
				} else if(number === undefined) {
					//对应变换类型不存在，直接返回0
					if(thisDoms[i].transformObj[type] === undefined) {
						return 0
							//对应变换类型存在，返回保存值
					} else {
						return thisDoms[i].transformObj[type].value;
					}
				} else {
					//进行单位判断
					let unit = '';
					if(/^(rotate|skew)/.test(type)) unit = 'deg';
					if(/^translate/.test(type)) unit = 'px';
					//将欲设置值保存至数据保存对象
					thisDoms[i].transformObj[type] = {
						value: number,
						unit: unit
					};
					//遍历数据保存对象拼接transform字符串
					let transformStr = '';
					for(let tempType in thisDoms[i].transformObj) {
						let tempObj = thisDoms[i].transformObj[tempType];
						transformStr += ' ' + tempType + '(' + tempObj.value + tempObj.unit + ')';
					}
					//进行完整样式设置
					thisDoms[i].style.transform = transformStr;
				}
			}
		}
	}
})(window)
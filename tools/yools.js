'use strict';

var yools = {};
(function () {
	//自定义滚动条 滚动元素内容区不要有上下内边距
	function scrollbar(opitions) {
		//		{
		//			//滚动元素
		//			wrapper: ,
		//			//滚动元素内容区
		//			inner: ,
		//			//滚动条
		//			scroll: ,
		//			//滚动滑块
		//			bar:
		//		}
		var elWrapper = $(opitions.wrapper),
		    elInner = $(opitions.inner),
		    wrapperHeight = elWrapper.height(),
		    innerHeight = elInner.height(),
		    k = wrapperHeight / innerHeight,
		    elScrollWrapper = $(opitions.scroll),
		    elScrollInner = $(opitions.bar),
		    elScrollWrapperHeight = elScrollWrapper.height(),
		    maxScrollHeight = innerHeight - wrapperHeight,
		    allowTop = void 0,
		    kScroll = void 0;
		//判断是否显示滚动条
		if (maxScrollHeight > 0) {
			elScrollWrapper.show();
			elScrollInner.css('height', k * elScrollWrapperHeight);
			allowTop = elScrollWrapperHeight - elScrollInner.height();
			//同步滚动条
			elWrapper.scroll(function () {
				kScroll = elWrapper.scrollTop() / maxScrollHeight;
				elScrollInner.css('top', kScroll * allowTop + 'px');
			});
			//滚动条绑定拖拽功能
			elScrollInner.on('mousedown', function (e) {
				var scrollFlag = true;
				var ev = e || event;
				var startTop = +elScrollInner.css('top').replace('px', '') || 0;
				var startY = ev.clientY;
				$(document).on('mousemove', function (e) {
					if (!scrollFlag) {
						return false;
					}
					var ev = e || event;
					var nowY = ev.clientY;
					var nowTop = startTop + nowY - startY;
					if (nowTop <= 0) {
						nowTop = 0;
					} else if (nowTop > allowTop) {
						nowTop = allowTop;
					}
					//移动滚动滑块
					elScrollInner.css('top', nowTop + 'px');
					//移动滚动区
					elWrapper.scrollTop(maxScrollHeight * nowTop / allowTop);
				});
				$(document).on('mouseup', function () {
					scrollFlag = false;
				});
			});
		}
	}
	yools.scrollbar = scrollbar;
	
	//列表类active切换
	function changeActiveItemOfList($dom,className){
		$($dom).addClass(className).siblings().removeClass(className);
	};
	yools.changeActiveItemOfList = changeActiveItemOfList;
	
	//判断是否在视口内
		//y:高度差(还有y高度时同样认为离开视口)
	function isOnScreen(selector,y){
		if(y==undefined){
			y = 0;
		};
	    var win = $(window);
	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };
	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();
		$dom = $(selector);
		var bounds = $dom.offset();
	    bounds.right = bounds.left + $dom.outerWidth();
	    bounds.bottom = bounds.top + $dom.outerHeight();
	    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom-y));
	     
	};
	yools.isOnScreen = isOnScreen;
	
	//导航active与内容滚动关联
		//blockSelector:内容块;navItemSelector:导航元素;className:切换样式;y:高度差
	yool.toggleNavClassOnScroll = function(blockSelector,navItemSelector,className,y){
		var _init = function(){
			var index;
			for(var i = 0;i<$(blockSelector).length;i++){
				if(yool.isOnScreen($(blockSelector)[i],y)){
					index = i;
					break;
				}
			};
			if(i>=$(blockSelector).length){
				$(navItemSelector).removeClass(className);
				return false;
			};
			yool.changeActiveItemOfList($(navItemSelector)[index],className);
		};
		_init();
		$(window).scroll(function(){
			_init();
		})
	};
})();
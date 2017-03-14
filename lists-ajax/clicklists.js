function askForList(obj){
	//容器
	var listWrapper = $(obj.wrapper);
	//点击按钮
	var askForBtn = $(obj.btn);
	//点击前文本
	var beforeText = obj.before;
	//加载中文本
	var onText = obj.on;
	//没有更多提示文本
	var nomoreText = obj.nomore;
	//自动请求首页数据
	var auto = obj.auto;
	//每页个数
	var num = obj.num;
//		拼串部分先保留
//		var result = '<li><img src="mydata"/><p class="title">mydata<p class="time">madata</p><p class="des">mydata</p><a href="mydata" class="read-more">READ MORE</a></li>';
//		var mydataList = obj.mydataList;
	//[imgSrc,title,time,des,href]
	var counter = 0; //当前页
	function getListsByAjax(){
		askForBtn.text(textLoad)
		$.ajax({
			type: 'GET',
			url: './json/more.json',
			dataType: 'json',
			success: function(data){
				loadText = beforeText;
				result='';
				for(var i = 0+counter*num; i < (counter+1)*num; i++) {
					if(data.lists[i]){
						var obj = {
							imgSrc : data.lists[i].src,
							title : data.lists[i].title,
							time : data.lists[i].time,
							des : data.lists[i].des,
							href : data.lists[i].href
						}
						result +='<li><img src="'
						+ obj.imgSrc +'"/><p class="title">'
						+ obj.title +'<p class="time">'+
						+ obj.time +'</p><p class="des">'
						+ obj.des +'</p><a href="'+
						+ obj.href +'" class="read-more">READ MORE</a></li>';	
					}else{
						loadText = nomoreText;
						askForBtn.unbind();
					}
				};
				
				counter++;
				// 为了测试，延迟加载
				setTimeout(function() {
					listWrapper.append(result);
					askForBtn.text(loadText);
				}, 300);
				loadText = onText;
			},
			error: function() {
				console.log('Ajax error!');
			}
		});
	}
	if(auto == true){
		getListsByAjax();	
	}
	askForBtn.click(getListsByAjax);
}


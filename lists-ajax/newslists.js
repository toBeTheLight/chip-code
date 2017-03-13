$(function(){
	//文章列表容器
	var $newsLists = $('.news-lists');
	//加载按钮
    var $readMore = $('#readMore');
    //文本提示
    var $loading = $('.load-des');
    var loadText = '加载中';
    var counter = 0; //当前页
	var num = 3; // 每页展示3个
	getListsByAjax();
	$readMore.click(getListsByAjax);
	
	function getListsByAjax(){
		$loading.text(loadText)
		$.ajax({
			type: 'GET',
			url: './json/more.json',
			dataType: 'json',
			success: function(data){
				loadText = "加载更多"
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
						loadText = '没有更多'
					}
				};
				
				counter++;
				// 为了测试，延迟加载
				setTimeout(function() {
					$newsLists.append(result);
					$loading.text(loadText);
				}, 300);
				loadText = '加载中';
			},
			error: function() {
				console.log('Ajax error!');
			}
		});
	}
})

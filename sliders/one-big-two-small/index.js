//初始化数据
$(function() {
  //初始数据
  var srcS = {
    active: "red",
    noActive1: "yellow",
    noActive2: "green"
  };
  var nowFaSelector = "";
  var writeTime = 1;
  //
  var $active = null,
    $waitActive = null,
    $noActive1 = null,
    $noActive2 = null,
    $waitNoActive = null;
  $activeWrapper = null;
  $noActiveWrapper = null;

  var transS = false;
  //将地址数据写入元素函数
  function writerSrcInEls(faSelector, init) {
    if (faSelector !== nowFaSelector || init == "init") {
      nowFaSelector = faSelector;
      $active = $(".active");
      $waitActive = $(faSelector + " .wait-active");
      $noActive1 = $(faSelector + " .no-active1");
      $noActive2 = $(faSelector + " .no-active2");
      $waitNoActive = $(faSelector + " .wait-no-active");
      $activeWrapper = $(faSelector + " .active-wrapper");
      $noActiveWrapper = $(faSelector + " .no-active-wrapper");
    }
    $active.css("background", srcS.active).attr("data-src", srcS.active);
    $waitActive.css("background", srcS.noActive1);
    $noActive1
      .css("background", srcS.noActive1)
      .attr("data-src", srcS.noActive1);
    $waitNoActive.css("background", srcS.active).attr("data-src", srcS.active);
    $noActive2
      .css("background", srcS.noActive2)
      .attr("data-src", srcS.noActive2);
    //初始化进行transition标志更改
    $activeWrapper.attr("transition", false);
    $noActiveWrapper.attr("transition", false);
  }
  writerSrcInEls(nowFaSelector, "init");

  $noActiveWrapper.click(function() {
    if (
      $noActiveWrapper.attr("transition") == "true" ||
      $activeWrapper.attr("transition") == "true"
    ) {
      return false;
    }
    var $this = $(this);
    var $clickNoActive = $this.find(".no-active");
    $waitActive.css("background", $clickNoActive.attr("data-src"));
    //点击小图wrapper,传入小图wrapper
    console.log($this);
    moveElWrapper({
      $el: $this,
      name: "left",
      transClass: "trans-left",
      value: "-200px",
      initval: "0px"
    });
    //传入大图wrapper
    moveElWrapper({
      $el: $activeWrapper,
      name: "left",
      transClass: "trans-left",
      value: "-400px",
      initval: "0px"
    });
    changeSrc($this.find(".no-active"));
  });

  //点击后更新srcS数据对象
  function changeSrc($el) {
    var src = $el.attr("data-src");
    srcS[$el.attr("data-index")] = srcS.active;
    srcS.active = src;
  }
  //控制轮播运动与恢复
  function moveElWrapper(obj) {
    //obj={
    //	$el:轮播图wrapper,
    //	name:过渡样式键
    //	value:过渡样式值
    //	initval:恢复样式值
    //}
    obj.$el.attr("transition", true);
    obj.$el.addClass(obj.transClass);
    obj.$el.css(obj.name, obj.value);

    obj.$el.on("transitionend", function() {
      obj.$el.removeClass(obj.transClass);
      console.log(obj.$el);
      if (obj.initval !== undefined) {
        obj.$el.css(obj.name, obj.initval);
      }
      writerSrcInEls(nowFaSelector);
      obj.$el.attr("transition", false);
    });
  }
});

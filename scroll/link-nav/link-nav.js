function linkNav(blockSelector, navItemSelector, className) {
  var _init = function() {
    var index;
    for (var i = 0; i < $(blockSelector).length; i++) {
      if (isOnScreen($(blockSelector)[i])) {
        index = i;
        break;
      }
    }
    if (i >= $(blockSelector).length) {
      $(navItemSelector).removeClass(className);
      return false;
    }
    $(navItemSelector).removeClass(className)
    $($(navItemSelector)[index]).addClass(className)
  };
  _init();
  $(window).scroll(function() {
    _init();
  });
}

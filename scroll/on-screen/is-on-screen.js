//after:高度差(还有after高度时同样认为离开视口)
//before:高度差(还有before高度时同样认为进入视口)

function isOnScreen(selector, before, after) {
  before = before || 0;
  after = after || 0;
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  $dom = $(selector);
  var bounds = $dom.offset();
  bounds.right = bounds.left + $dom.outerWidth();
  bounds.bottom = bounds.top + $dom.outerHeight();
  return !(viewport.bottom < bounds.top - before || viewport.top > bounds.bottom - after);
}

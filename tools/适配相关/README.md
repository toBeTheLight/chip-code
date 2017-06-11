# 各种根据业务需求改进适配方案 #


## 1.'强制'横屏显示效果 ##

文件：show-as-horizontal-with-rem.js
原理：基于rem适配,根据`window.orientation判断横竖屏`，竖屏按横屏适配，并旋转90deg。
使用：直接引入文件，无`window.orientation属性`自行处理。样式部分需要做超出居中处理(子元素过大依然居中)。
适用：单页面全屏页面。
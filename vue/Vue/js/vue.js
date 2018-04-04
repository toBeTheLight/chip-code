// 构造函数
class Vue {
  constructor (options) {
    let dataOptions = options.data
    let renderOptions = options.renderFun
    initData(this, dataOptions)
    initRenderFun(this, renderOptions)
  }
}
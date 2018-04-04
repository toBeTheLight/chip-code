// 等一系列初始化功能
function initData (vm, data) {
  for (let key in data) {
    observer(vm, key, data[key])
  }
}

function initRenderFun (vm, renderFuns) {
  for (let key in renderFuns) {
    new Watcher(vm, renderFuns[key])
  }
}
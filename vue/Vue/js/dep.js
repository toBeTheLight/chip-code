// 依赖类
class Dep {
  constructor () {
    this.subs = []
  }
}
// 用来挂载当前待添加的watcher
Dep.target = null
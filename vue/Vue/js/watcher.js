class Watcher {
  constructor (vm, fun) {
    this.fun = fun
    Dep.target = this
    this.run = () => {
      this.fun.call(vm)
    }
    this.run.call(vm)
    Dep.target = null
  }
}
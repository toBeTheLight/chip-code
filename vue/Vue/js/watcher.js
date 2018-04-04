class Watcher {
  constructor (vm, fun) {
    this.fun = fun
    Dep.target = this
    this.run = () => {
      this.fun.call(vm)
    }
    // 1. 进行值和功能的第一次执行，初始化。
    // 2. 执行watcher.fun，触发watcher.fun内依赖的属性的get方法，从而将此watcher（观察者）加入属性的依赖队列。
    this.run.call(vm)
    Dep.target = null
  }
}
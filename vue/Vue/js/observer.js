function observer (vm, key, val) {
  let dep = new Dep()
  Object.defineProperty(vm, key, {
    get () {
      // 如果有待添加的watcher，则加入subs队列
      if (Dep.target) {
        dep.subs.push(Dep.target)
      }
      return val
    },
    set (newVal) {
      val = newVal
      // 通知watcher执行各自的功能
      for (watcher of dep.subs) {
        watcher.run()
      }
    }
  })
}
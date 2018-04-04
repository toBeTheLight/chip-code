function observer (vm, key, val) {
  let dep = new Dep()
  Object.defineProperty(vm, key, {
    get () {
      if (Dep.target) {
        dep.subs.push(Dep.target)
      }
      return val
    },
    set (newVal) {
      val = newVal
      for (watcher of dep.subs) {
        watcher.run()
      }
    }
  })
}
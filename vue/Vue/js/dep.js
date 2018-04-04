class Dep {
  constructor () {
    this.subs = []
  }
}
Dep.target = null
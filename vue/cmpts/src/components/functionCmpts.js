import $TryMessageBox from './message-box/index.js'

let all = {
  $TryMessageBox
}

export default function installFunctionCmpts (Vue) {
  for (let name in all) {
    if (all.hasOwnProperty(name)) {
      Vue.prototype[name] = all[name]
    }
  }
}

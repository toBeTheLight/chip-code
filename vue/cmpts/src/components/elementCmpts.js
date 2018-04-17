import TryButton from './button/Button.vue'

let all = {
  TryButton
}

export default function installElementCmpts (Vue) {
  for (let name in all) {
    if (all.hasOwnProperty(name)) {
      Vue.component(name, all[name])
    }
  }
}

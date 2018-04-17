import Vue from 'vue'
import MessageBox from './MessageBox.vue'

let MessageBoxConstructor = Vue.extend(MessageBox)
let instance

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  window.instance = instance
}
const showMessageBox = ({title, message}) => {
  if (!instance) {
    initInstance()
  }
  instance['title'] = title
  instance['message'] = message
  document.body.appendChild(instance.$el)
  instance.show()
  let promise = new Promise((resolve, reject) => {
    instance.resolve = resolve
    instance.reject = reject
  })
  return promise
}
const $MessageBox = (options) => {
  return showMessageBox(options)
}

export default $MessageBox

<template>
  <div id="app">
    <TryButton @click="showMessageBox">消息弹窗</TryButton>
  </div>
</template>

<script>
import TryButton from './components/button/Button.vue'
export default {
  name: 'App',
  data () {
    return {
      testData: 'testData'
    }
  },
  methods: {
    testMethod () {
      alert(this.testData)
    },
    showMessageBox () {
      console.log(1)
      this.$TryMessageBox({
        title: '消息提示',
        message: '是否提交？'
      }).then(() => {
        this.testMethod()
      }).catch(() => {
        console.log('err')
      })
    }
  },
  components: {
    TryButton
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>

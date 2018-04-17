<template src="./template.html">
</template>

<script>
export default {
  data () {
    return {
      visiable: false,
      resolve: null,
      reject: null
    }
  },
  props: {
    title: {
      default: ''
    },
    message: {
      require: true
    }
  },
  methods: {
    confirmHandler () {
      this.hide()
      if (typeof this.resolve === 'function') {
        this.resolve()
      }
    },
    cancelHandler () {
      this.hide()
      if (typeof this.reject === 'function') {
        this.reject()
      }
    },
    hide () {
      this.visiable = false
    },
    show () {
      this.visiable = true
    }
  }
}
</script>

<style src="./style.less" lang="less"></style>

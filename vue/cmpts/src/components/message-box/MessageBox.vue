<template src="./template.html">
</template>

<script>
export default {
  data () {
    return {
      visiable: false
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
    close () {
      this.visiable = false
    },
    show () {
      this.visiable = true
    }
  }
}
</script>

<style src="./style.less" lang="less"></style>

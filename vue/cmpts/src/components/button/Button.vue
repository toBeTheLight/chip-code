<template src="./template.html"></template>

<script>
export default {
  props: {
    size: {
      default: 'normal',
      type: String
    }
  },
  methods: {
    clickHandle () {
      this.$emit('click')
    }
  }
}
</script>
<style src="./style.less" lang="less"></style>

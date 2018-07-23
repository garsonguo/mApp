<template>
    <div class="header">
        <div class="left">{{title}}</div>
        <div class="right">
          <i class="iconfont icon-sousuo"></i>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '管理员'
    }
  }
}
</script>

<style scoped lang='less'>
.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  .left{
    float: left;
  }
  .right{
    float: right;
  }
}
</style>

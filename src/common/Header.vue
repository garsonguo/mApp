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
  data () {
    return {
      title: '管理员'
    }
  }
}
</script>

<style scoped lang='less'>
.header{
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

<template>
  <div class="flow-header">
    <div class="number">
      <span>受理编号：</span>
      <span>0203131hjnjau</span>
    </div>
    <div class="flow-btn">
      <router-link :to="{path:'/Transfer'}">
        <i class="iconfont icon-you-copy"></i>
        转移
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowHeader'
}
</script>

<style scoped lang='less'>
.flow-header{
  height: 70px;
  line-height: 70px;
  overflow: hidden;
  margin: 10px 0;
  padding: 0 20px;
  background-color: #f2f2f2;
  font-size: 28px;
  .number{
    float: left;
    font-weight: bolder;
  }
  .flow-btn a{
    float: right;
    text-decoration: none;
    color: #333;
    .icon-you-copy{
      font-size: 12px;
      color: #448aff;
    }
  }
}
</style>

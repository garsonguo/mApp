<template>
  <div>
    <div class="count">
        共{{countNum}}条记录
    </div>
  </div>
</template>

<script>
export default {
  name: 'Count',
  props: {
    countNum: Number
  }
}
</script>

<style scoped lang='less'>
.count {
  height: 70px;
  line-height: 70px;
  background-color: #f2f2f2;
  padding: 0 20px;
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  font-size: 28px;/*px*/
}
</style>

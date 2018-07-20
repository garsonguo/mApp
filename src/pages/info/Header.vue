<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '湖南省国土资源厅移动办公平台'
    }
  }
}
</script>

<style scoped lang='less'>
.header {
  height: 70px;
  line-height: 70px;
  font-size: 40px;/*px*/
  text-align: center;
  color: #28a8ff;
  border-bottom: 1px solid #ddd;/*px*/
}
</style>

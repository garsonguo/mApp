<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped lang='less'>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 70px;
  line-height: 70px;
  font-size: 32px;/*px*/
  text-align: center;
  border-bottom: 1px solid #ddd;/*px*/
}
</style>

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
  height: 70px;
  line-height: 70px;
  font-size: 32px;/*px*/
  text-align: center;
  border-bottom: 1px solid #ddd;/*px*/
}
</style>

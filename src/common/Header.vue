<template>
    <div class="header">
        {{title}}
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

<style scoped>
.header{
    height: 70px;
    line-height: 70px;
}
</style>

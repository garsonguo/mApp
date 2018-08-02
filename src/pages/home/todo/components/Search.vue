<template>
    <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input class="input" type="text" v-model="search" placeholder="搜索">
    </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped lang='less'>
.search {
  position: relative;
  height: 70px;
  line-height: 70px;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
  .iconfont{
      position: absolute;
      left: 20px;
  }
  .input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 60px;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
  }
}
</style>

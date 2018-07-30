<template>
    <div class="header">
        <div @click="$router.back(-1)" class="back">
            <i class="iconfont icon-back"></i>
        </div>
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
.header{
    height: 70px;
    line-height: 70px;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;/*px*/
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
    .back{
        font-size: 36px;/*px*/
        position: absolute;
        left: 20px;
    }
}
</style>

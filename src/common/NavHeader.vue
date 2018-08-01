<template>
    <div class="header">
        <div @click="routerBack" class="back">
          <i class="iconfont icon-back"></i>
        </div>
        {{title}}
        <div v-show="show" class="add" @click="add">
          <i class="iconfont icon-dongtai"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavHeader',
  props: {
    title: String,
    path: {
      default: '/Home'
    },
    show: {
      default: false
    }
  },
  watch: {
    '$route': function (to, from) {
    }
  },
  methods: {
    routerBack () {
      const pathUrl = this.path
      this.$router.push({path: pathUrl})
    },
    add () {
      this.$router.push({path: './AddSchedule'})
    }
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
    .add{
      font-size: 36px;/*px*/
      position: absolute;
      right: 20px;
      top: 0;
    }
}
</style>

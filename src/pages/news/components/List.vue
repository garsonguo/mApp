<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="item" v-for="item of list" :key="item.id">
        <div class="info">
          <div class="title">
            {{item.title}}
          </div>
          <div class="bottom">
            <span class="unit">{{item.organization}}</span>
            <span class="date">{{item.date}}</span>
          </div>
        </div>
        <div class="img">
          <img :src="item.img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    list: Array
  },
  created () {
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    '$route': function (to, from) {
      // 共用组件时   刷新问题
      this.$router.app.$options.store.state.navShow = false
    }
  }
}
</script>

<style scoped lang='less'>
.list{
  position: absolute;
  top: 160px;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .item{
    display: flex;
    font-size: 28px;
    border-bottom: 1px solid #ddd;
    .info{
      width: 70%;
      padding: 20px;
      position: relative;
      .title{
        line-height: 1.7;
      }
      .bottom{
        position: absolute;
        bottom: 20px;
        font-size: 24px;
        color: #999999;
        line-height: 1.7;
        left: 20px;
        right: 20px;
        .date{
          float: right;
        }
      }
    }
    .img{
      width: 30%;
      height: 180px;
      padding: 20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

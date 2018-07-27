<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="item" v-for="item of list" :key="item.id">
        <div class="title">
          {{item.title}}
        </div>
        <div class="info">
          <span class="organization">{{item.organization}}</span>
          <span class="date">{{item.date}}</span>
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
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang='less'>
.list{
  position: absolute;
  top: 500px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .item{
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    font-size: 28px;
    .title{
      line-height: 1.5;
    }
    .info{
      line-height: 2.0;
      color: #999;
      .date{
        float:right;
      }
    }
  }
}
</style>

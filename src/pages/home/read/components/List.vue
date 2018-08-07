<template>
  <div class="list" ref="wrapper">
    <div>
      <router-link v-for="item of list" :key="item.id" :to="{path:'/NewsDetail',query:{id:item.id,backUrl:'/Read/List/1'}}">
        <div class="item">
          <div class="title">
            {{item.title}}
          </div>
          <div class="info">
            <span class="organization">{{item.organization}}</span>
            <span class="date">{{item.date}}</span>
          </div>
        </div>
      </router-link>
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
    this.scrollFn()
  },
  methods: {
    scrollFn () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.wrapper)
        } else {
          this.scroll.refresh()
        }
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 50) {
            console.log('下拉刷新')
            this.$emit('refresh')
          }
          if (this.scroll.maxScrollY > pos.y + 10) {
            console.log('加载更多')
            this.$emit('loadMore', this.scroll)
          }
        })
      })
    }
  }
}
</script>

<style scoped lang='less'>
.list{
  a{
    text-decoration: none;
    color: #333;
  }
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

<template>
  <div class="detail">
    <Header :title="title" :path="path"></Header>
    <div class="body" ref="wrapper">
      <div>
        <div class="header-detail">
          <div class="title">
            {{htitle}}
          </div>
          <div class="info">
            <span class="date">{{date}}</span>
            <span class="unit">{{unit}}</span>
          </div>
        </div>
        <div class="content">
          {{content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'NewsDetail',
  components: {
    Header
  },
  data () {
    return {
      id: '',
      title: '',
      htitle: '',
      date: '',
      unit: '',
      content: '',
      path: ''
    }
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
    this.path = this.$router.history.current.query.backUrl
  },
  mounted () {
    // 获取参数
    this.id = this.$router.history.current.query.id
    this.getDetail(this.id)
    setTimeout(() => { this.scroll = new Bscroll(this.$refs.wrapper, {}) }, 20)
  },
  methods: {
    getDetail (id) {
      axios.get('/api/newsDetail.json?id=' + id)
        .then(this.getDate)
    },
    getDate (res) {
      res = res.data
      if (res.ret && res.data) {
        this.htitle = res.data.title
        this.date = res.data.date
        this.unit = res.data.unit
        this.content = res.data.content
      }
    }
  }
}
</script>

<style scoped lang='less'>
.detail{
  .body{
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    .header-detail{
      border-bottom: 2px solid #ddd;
      padding: 20px;
      .title{
        font-size: 36px;
        line-height: 1.7;
        text-align: center;
        font-weight: bolder;
      }
      .info{
        padding: 0 60px;
        line-height: 2.7;
        font-size: 28px;
        color: #999999;
        .unit{
          float: right;
        }
      }
    }
    .content{
      padding: 20px;
      // line-height: 3.0;
    }
  }
}
</style>

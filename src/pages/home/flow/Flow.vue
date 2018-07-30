<template>
  <div class="timeline">
    <Header :title="title" :path="path"></Header>
    <div class="body">
      <router-view></router-view>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import FooterBar from './components/FooterBar.vue'
import axios from 'axios'
export default {
  name: 'Flow',
  components: {
    Header,
    FooterBar
  },
  data () {
    return {
      title: '',
      path: '/Todo/1',
      footerList: []
    }
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  },
  mounted () {
    this.getList()
  },
  watch: {
    '$route': function (to, from) {
      // 共用组件时   刷新问题
      this.$router.app.$options.store.state.navShow = false
    }
  },
  methods: {
    getList () {
      axios.get('/api/flow.json')
        .then(this.getData)
    },
    getData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.footerList = res.data.navList
      }
    }
  }
}
</script>

<style scoped lang='less'>
.timeline{
  .body{
    position: absolute;
    top: 70px;
    bottom: 108px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>

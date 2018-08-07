<template>
  <div class="read">
    <van-loading v-show="loading" color="black" />
    <Header :title="title"></Header>
    <Search></Search>
    <Navbar :navList="navList" @refresh='refreshList' @loadMore='loadMore'></Navbar>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import Search from '@/common/NavSearch.vue'
import Navbar from './components/Navbar.vue'
import axios from 'axios'
export default {
  name: 'Read',
  components: {
    Header,
    Search,
    Navbar
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  },
  data () {
    return {
      navList: [],
      loading: false
    }
  },
  mounted () {
    this.getNavList()
  },
  methods: {
    getNavList () {
      this.loading = true
      axios.get('/api/read.json')
        .then(this.getList)
    },
    getList (res) {
      res = res.data
      if (res.ret && res.data) {
        this.navList = res.data.navList
        setTimeout(() => {
          this.loading = false
        }, 5000)
      }
    },
    refreshList () {
      this.getList()
    },
    loadMore (scroll) {
      scroll.refresh()
    }
  }
}
</script>

<style scoped lang='less'>
</style>

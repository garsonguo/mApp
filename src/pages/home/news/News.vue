<template>
  <div class="news">
    <van-loading v-show="loading" color="black" />
    <Header :title="title"></Header>
    <div class="nav">
      <router-link to="/News/List/1" exact>图片新闻</router-link>
      <router-link to="/News/List/2">单位新闻</router-link>
    </div>
    <router-view :list="list" @refresh='refreshList' @loadMore='loadMore'></router-view>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import { fetchList } from '@/api/news'
export default {
  name: 'News',
  components: {
    Header
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  },
  data () {
    return {
      list: [],
      loading: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      fetchList(this.listQuery).then(this.getNewsList)
    },
    getNewsList (res) {
      if (res.data) {
        if (this.list.length === 0) {
          this.list = res.data.list
          this.countNum = res.data.count
        } else {
          this.list.push(...res.data.list)
        }
        setTimeout(() => {
          this.loading = false
        }, 5000)
      }
    },
    refreshList () {
      this.getList()
    },
    loadMore (scroll) {
      this.listQuery.page += 1
      this.getList()
      scroll.refresh()
    }
  }
}
</script>

<style scoped lang='less'>
.news{
  .nav{
    position: fixed;
    top: 70px;
    z-index: 1;
    left: 0;
    right: 0;
    height: 90px;
    line-height: 90px;
    display: flex;
    justify-content: space-around;
    a{
      text-decoration: none;
      flex: auto;
      text-align: center;
      color: #333;
    }
    .router-link-active{
      color: #2774e0;
    }
  }
}
</style>

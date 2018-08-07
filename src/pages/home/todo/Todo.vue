<template>
    <div class="todo">
        <van-loading v-show="loading" color="black" />
        <Header :title="title"></Header>
        <search></search>
        <count :countNum="countNum"></count>
        <list :list="list" @refresh='refreshList' @loadMore='loadMore'></list>
    </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import Search from './components/Search.vue'
import Count from './components/Count.vue'
import List from './components/List.vue'
import { fetchList } from '@/api/todo'
export default {
  name: 'Todo',
  components: {
    Header,
    Search,
    List,
    Count
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  },
  data () {
    return {
      title: '',
      list: [],
      countNum: 0,
      Home: '/Home',
      loading: false
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 获取数据
    getList () {
      this.loading = true
      fetchList().then(this.getTodoList)
    },
    getTodoList (res) {
      if (res.data) {
        this.list = res.data.list
        this.countNum = res.data.count
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

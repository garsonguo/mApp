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
    // 获取数据
    getList () {
      this.loading = true
      fetchList(this.listQuery).then(this.getTodoList)
    },
    getTodoList (res) {
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
</style>

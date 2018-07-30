<template>
    <div class="todo">
        <Header :title="title" :path="Home"></Header>
        <search></search>
        <count :countNum="countNum"></count>
        <list :list="list"></list>
    </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import Search from './components/Search.vue'
import Count from './components/Count.vue'
import List from './components/List.vue'
import axios from 'axios'
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
      countNum: ''
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 获取数据
    getList () {
      axios.get('/api/todo.json')
        .then(this.getTodoList)
    },
    getTodoList (res) {
      res = res.data
      if (res.ret && res.data) {
        this.list = res.data.list
        this.countNum = res.data.count
      }
    }
  }
}
</script>

<style scoped lang='less'>
</style>

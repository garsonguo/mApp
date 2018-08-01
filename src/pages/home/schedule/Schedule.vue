<template>
  <div class="schedule">
    <Header :title="title" :show="true"></Header>
    <List :list="list"></List>
    <calendar :range="calendar2.range" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select"></calendar>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import List from './components/List.vue'
import calendar from './components/calendar.vue'
import axios from 'axios'
export default {
  name: 'Schedule',
  components: {
    Header,
    List,
    calendar
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
  data () {
    return {
      list: [],
      calendar2: {
        range: true,
        value: [[2018, 8, 1], [2019, 2, 16]], // 默认日期
        lunar: false, // 显示农历
        begin: [2018, 8, 1], // 可选开始日期
        end: [2018, 8, 5], // 可选结束日期
        select (begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      }
    }
  },
  methods: {
    getList () {
      axios.get('/api/schedule.json')
        .then(this.getData)
    },
    getData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.list = res.data.list
      }
    }
  }
}
</script>

<style scoped lang='less'>
</style>

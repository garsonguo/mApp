<template>
    <div>
      <Header></Header>
      <Swiper :swiperList='swiperList'></Swiper>
      <sub-nav></sub-nav>
      <common-nav></common-nav>
    </div>
</template>

<script>
import Header from '@/common/Header.vue'
import Swiper from './Swiper.vue'
import SubNav from './SubNav.vue'
import CommonNav from './CommonNav.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    SubNav,
    CommonNav
  },
  data () {
    return {
      swiperList: []
    }
  },
  mounted () {
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      axios.get('/api/home.json')
        .then(this.getHome)
    },
    getHome (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
      }
    }
  }
}
</script>

<style scoped>
</style>

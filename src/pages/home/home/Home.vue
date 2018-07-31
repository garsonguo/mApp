<template>
    <div class="home">
      <Header :title="title"></Header>
      <Swiper class="swiper" :swiperList='swiperList'></Swiper>
      <sub-nav :subNavList='subNavList'></sub-nav>
      <common-nav :commonNavList='commonNavList'></common-nav>
    </div>
</template>

<script>
import Header from '@/common/Header.vue'
import Swiper from './components/Swiper.vue'
import SubNav from './components/SubNav.vue'
import CommonNav from './components/CommonNav.vue'
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
      swiperList: [],
      title: '',
      subNavList: [],
      commonNavList: []
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
        this.title = data.title
        this.subNavList = data.subNavList
        this.commonNavList = data.commonNavList
      }
    }
  }
}
</script>

<style scoped lang='less'>
.home{
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 118px;
}
</style>

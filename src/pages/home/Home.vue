<template>
    <div>
      <Header></Header>
      <Swiper></Swiper>
      <sub-nav></sub-nav>
      <common-nav></common-nav>
    </div>
</template>

<script>
import Header from '@/common/Header.vue'
import Swiper from './Swiper.vue'
import SubNav from './SubNav.vue'
import CommonNav from './CommonNav.vue'
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
      msg: '我是主页'
    }
  }
}
</script>

<style scoped>
</style>

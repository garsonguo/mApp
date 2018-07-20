<template>
    <div>
      <Header></Header>
      <Swiper></Swiper>
    </div>
</template>

<script>
import Header from '@/common/Header.vue'
import Swiper from './Swiper.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper
  },
  data () {
    return {
      msg: '我是主页'
    }
  }
}
</script>

<style scoped>
@import '../../assets/reset.scss';
</style>

<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <a href="#">
                    <img src="../../assets/imgs/1.jpg">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#">
                    <img src="../../assets/imgs/2.jpg">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#">
                    <img src="../../assets/imgs/3.jpg">
                </a>
            </swiper-slide>
            <swiper-slide>
                <a href="#">
                    <img src="../../assets/imgs/4.jpg">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped lang='less'>
.swiper{
    .swiper-container{
        width: 100%;
        height: 400px;
    }
    .swiper-slide a{
        display: block;
        img{
            width: 100%;
            height: 400px;
        }
    }
}
</style>

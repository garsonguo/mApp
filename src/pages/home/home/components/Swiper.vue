<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item of swiperLists" :key="item.id">
                <a href="#">
                    <img :src=item.img>
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
  props: {
    swiperList: Array
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
    swiperLists () {
      const swiperList = this.swiperList
      return swiperList
    }
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

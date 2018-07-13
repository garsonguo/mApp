<template>
    <div>
      <Header></Header>
        {{msg}}
    </div>
</template>

<script>
import Header from '@/common/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
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

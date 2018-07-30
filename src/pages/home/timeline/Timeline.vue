<template>
  <div class="timeline">
    <Header :title="title" :path="path"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
export default {
  name: 'Timeline',
  components: {
    Header
  },
  data () {
    return {
      title: '',
      path: '/Todo/1'
    }
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  }
}
</script>

<style scoped lang='less'>
</style>

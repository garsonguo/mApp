<template>
  <div id="app">
    <router-view/>
    <footer-nav v-show="show"></footer-nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FooterNav from '@/common/FooterNav'
export default {
  name: 'App',
  components: {
    FooterNav
  },
  data () {
    return {}
  },
  computed: mapState({
    show: state => state.navShow
  })
}
</script>

<style scoped lang='less'>
</style>

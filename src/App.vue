<template>
  <div id="app">
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/common/FooterNav'
export default {
  name: 'App',
  components: {
    FooterNav
  }
}
</script>

<style scoped lang='less'>

</style>

<template>
    <div>
        <common-header :title='title'></common-header>
        <my-info></my-info>
        <my-list></my-list>
    </div>
</template>

<script>
import CommonHeader from '../../common/CommonHeader.vue'
import MyInfo from './MyInfo.vue'
import MyList from './MyList.vue'
export default {
  name: 'My',
  components: {
    CommonHeader,
    MyInfo,
    MyList
  },
  data () {
    return {
      title: '我的'
    }
  }
}
</script>

<style scoped>
</style>

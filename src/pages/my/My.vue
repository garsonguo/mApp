<template>
    <div class="my">
        <common-header :title='title'></common-header>
        <div class="body">
          <my-info></my-info>
          <my-list></my-list>
        </div>
    </div>
</template>

<script>
import CommonHeader from '../../common/CommonHeader.vue'
import MyInfo from './components/MyInfo.vue'
import MyList from './components/MyList.vue'
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

<style scoped lang='less'>
.my{
  .body{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 118px;
  }
}
</style>

<template>
    <div>
        <Header :title='title'></Header>
        <List class="list" :infoList='infoList'></List>
    </div>
</template>

<script>
import Header from '../../common/CommonHeader.vue'
import List from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Info',
  components: {
    Header,
    List
  },
  data () {
    return {
      infoList: [],
      title: ''
    }
  },
  mounted () {
    this.getInfoList()
  },
  methods: {
    getInfoList () {
      axios.get('/api/info.json')
        .then(this.getHomeInfoList)
    },
    getHomeInfoList (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.infoList = data.infoList
        this.title = data.title
      }
    }
  }
}
</script>

<style scoped lang='less'>
.list{
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 118px;
}
</style>

<template>
    <div>
        <Header :title='title'></Header>
        <List :infoList='infoList'></List>
    </div>
</template>

<script>
import Header from './Header.vue'
import List from './List.vue'
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

<style scoped>
</style>

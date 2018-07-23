<template>
    <div>
        <Header :title="title"></Header>
        <List :list='list' :letter='letter'></List>
        <Aside :list='list' @change="handleLetterChange"></Aside>
    </div>
</template>

<script>
import Header from '../../common/Header.vue'
import List from './components/List.vue'
import Aside from './components/Aside.vue'
import axios from 'axios'
export default {
  name: 'Contacts',
  data () {
    return {
      title: '通讯录',
      list: [],
      letter: ''
    }
  },
  components: {
    Header,
    List,
    Aside
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      axios.get('/api/contacts.json').then(this.getConList)
    },
    getConList (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style scoped>
</style>

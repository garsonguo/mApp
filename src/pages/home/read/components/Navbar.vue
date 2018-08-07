<template>
  <div class="navbar">
    <div class="nav">
      <div class="panel" v-for="item of navList" :key="item.id">
        <router-link class="item" :to="{path:item.href}">
          <div class="logo" :class="item.color">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="logoName">
            {{item.logoName}}
          </div>
        </router-link>
      </div>
    </div>
    <Count :countNum="countNum"></Count>
    <router-view :list="list" @refresh='refreshList' @loadMore='loadMore'></router-view>
  </div>
</template>

<script>
import Count from '@/common/NavCount.vue'
import { fetchList } from '@/api/read'
export default {
  name: 'Navbar',
  props: {
    navList: Array
  },
  components: {
    Count
  },
  data () {
    return {
      countNum: 0,
      list: [],
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      // 可以根据获取的id参数作为获取不同数值的标识传给服务获取相应数值
      // const id = this.$router.history.current.params.id
      fetchList(this.listQuery).then(this.getReadList)
    },
    getReadList (res) {
      if (res.data) {
        if (this.list.length === 0) {
          this.list = res.data.list
          this.countNum = res.data.count
        } else {
          this.list.push(...res.data.list)
        }
        setTimeout(() => {
          this.loading = false
        }, 5000)
      }
    },
    refreshList () {
      this.getList()
    },
    loadMore (scroll) {
      this.listQuery.page += 1
      this.getList()
      scroll.refresh()
    }
  }
}
</script>

<style scoped lang='less'>
.navbar {
  position: fixed;
  top: 160px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
  .nav{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .panel {
    position: relative;
    width: 20%;
    box-sizing: border-box;
    height: 208px;
    .item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-decoration: none;
      .logo {
        height: 100px;
        line-height: 100px;
        width: 100px;
        margin: auto;
        margin-bottom: 20px;
        border-radius: 50%;
        .iconfont {
          font-size: 58px;
          color: #fff;
        }
      }
      .logoName{
        color: #333;
      }
    }
  }
}
</style>

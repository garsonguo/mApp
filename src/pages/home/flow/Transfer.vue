<template>
  <div class="transfer">
    <Header :title="title" :path="path"></Header>
    <flow-header></flow-header>
    <div class="box">
      <div class="left">
        <div class="bar">
          <i class="iconfont icon-you-copy"></i>
          移交方向
        </div>
        <div class="list">
          <van-collapse v-model="activeNames" accordion>
            <van-collapse-item name="1">
              <div slot="title"><van-icon name="idcard" />处室承办</div>
              <ul @click="handlerAdd">
                <li v-for="item of officeList" :key="item.id">
                  {{item.name}}
                  <i class="iconfont icon-jinrujiantou"></i>
                </li>
              </ul>
            </van-collapse-item>
            <van-collapse-item name="2">
              <div slot="title"><van-icon name="idcard" />办结归档</div>
              <ul>
                <li v-for="item of archiveList" :key="item.id">
                  {{item.name}}
                  <i class="iconfont icon-jinrujiantou"></i>
                </li>
              </ul>
            </van-collapse-item>
            <van-collapse-item name="3">
              <div slot="title"><van-icon name="idcard" />相关处室协办</div>
              <ul>
                <li v-for="item of assistingList" :key="item.id">
                  {{item.name}}
                  <i class="iconfont icon-jinrujiantou"></i>
                </li>
              </ul>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
      <div class="right">
        <div class="bar">
          <i class="iconfont icon-renshi"></i>
          承办人员
        </div>
        <div class="list">
          <ul @click="handlerReduce">
            <li v-for="item of undertake" :key="item" :data="item">
              {{item}}
              <i class="iconfont icon-guanbi" :data="item"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import FlowHeader from './components/FlowHeader.vue'
import axios from 'axios'
export default {
  name: 'Transfer',
  components: {
    Header,
    FlowHeader
  },
  created () {
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
    const name = this.$router.history.current.meta.title
    this.title = name
  },
  mounted () {
    this.getList()
  },
  data () {
    return {
      path: '/Flow/Base',
      title: '',
      activeNames: '1',
      undertake: [],
      officeList: [],
      archiveList: [],
      assistingList: []
    }
  },
  methods: {
    handlerAdd (e) {
      const name = e.target.innerText
      const index = this.undertake.indexOf(name)
      if (index < 0) {
        this.undertake.push(name)
      }
    },
    handlerReduce (e) {
      const data = e.target.attributes[1].value
      const index = this.undertake.indexOf(data)
      if (index >= 0) {
        this.undertake.splice(index, 1)
      }
    },
    getList () {
      axios.get('/api/transfor.json')
        .then(this.getData)
    },
    getData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.officeList = res.data.officeList
        this.archiveList = res.data.archiveList
        this.assistingList = res.data.assistingList
      }
    }
  }
}
</script>

<style scoped lang='less'>
.transfer{
  .flow-header{
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
  }
  .box{
    position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    bottom: 0;
    .left{
      position: absolute;
      width: 50%;
      top: 0;
      left: 0;
      bottom: 0;
      border-right: 1px solid #ddd;
      .list{
        position: absolute;
        top: 70px;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: auto;
        ul>li{
          height: 70px;
          line-height: 70px;
          padding-left: 40px;
          .iconfont{
            font-size: 28px;
            float: right;
          }
        }
        .van-icon{
          font-size: 12px;
          margin-right: 10px;
        }
      }
    }
    .right{
      position: absolute;
      width: 50%;
      top: 0;
      left: 50%;
      bottom: 0;
      .list{
        position: absolute;
        top: 70px;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: auto;
         ul>li{
           height: 70px;
           line-height: 70px;
           margin: 10px;
           border: 1px solid #ddd;
           text-align: center;
           padding: 0 20px;
           .iconfont{
            font-size: 28px;
            float: right;
          }
         }
      }
    }
    .bar{
      height: 70px;
      line-height: 70px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      .iconfont{
        font-size: 12px;
      }
    }
  }
}
</style>

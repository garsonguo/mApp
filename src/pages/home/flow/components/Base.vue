<template>
  <div class="base">
    <flow-header></flow-header>
    <div class="form">
      <div class="form-row">
        <span class="key">案卷编号：</span>
        <span class="value">{{ajbh}}</span>
      </div>
      <div class="form-row">
        <span class="key">公文标题：</span>
        <span class="value">{{gwbt}}</span>
      </div>
      <div class="form-row">
        <span class="key">来文单位：</span>
        <span class="value">{{lwdw}}</span>
      </div>
      <div class="form-row">
        <span class="key">文号：</span>
        <span class="value">{{wh}}</span>
      </div>
      <div class="form-row">
        <span class="key">编号：</span>
        <span class="value">{{bh}}</span>
      </div>
      <div class="form-row">
        <span class="key">收件单位：</span>
        <span class="value">{{sjdw}}</span>
      </div>
      <div class="form-row">
        <span class="key">收件人：</span>
        <span class="value">{{sjr}}</span>
      </div>
      <div class="form-row">
        <span class="key">收件时间：</span>
        <span class="value">{{sjsj}}</span>
      </div>
    </div>
    <div class="attachment">
      <div class="title">附件列表</div>
      <ul>
        <li v-for="item of fjList" :key="item.id">
          <router-link to="/Home">
            <i class="iconfont icon-fapiao"></i>
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FlowHeader from './FlowHeader.vue'
import { getFlow } from '@/api/flow'
export default {
  name: 'Base',
  components: {
    FlowHeader
  },
  data () {
    return {
      ajbh: '',
      gwbt: '',
      lwdw: '',
      wh: '',
      bh: '',
      sjdw: '',
      sjr: '',
      sjsj: '',
      fjList: []
    }
  },
  mounted () {
    this.getFlowDetail()
  },
  methods: {
    getFlowDetail () {
      getFlow().then((result) => {
        this.ajbh = result.data.ajbh
        this.gwbt = result.data.gwbt
        this.lwdw = result.data.lwdw
        this.wh = result.data.wh
        this.bh = result.data.bh
        this.sjdw = result.data.sjdw
        this.sjr = result.data.sjr
        this.sjsj = result.data.sjsj
        this.fjList = result.data.fjList
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang='less'>
.base{
  .form{
    padding: 20px;
    font-size: 28px;
    .form-row{
      line-height: 1.7;
      .key{
        display: inline-block;
        width: 20%;
        text-align: right;
        float: left;
      }
      .value{
        display: inline-block;
        width: 80%;
      }
    }
  }
  .attachment{
    font-size: 28px;
    .title{
      height: 70px;
      line-height: 70px;
      margin: 10px 0;
      padding: 0 20px;
      background-color: #f2f2f2;
    }
    ul{
      padding:10px 20px;
      a{
        text-decoration: none;
        color: #333;
        line-height: 1.7;
      }
    }
  }
}
</style>

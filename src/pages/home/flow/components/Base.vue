<template>
  <div class="base">
    <flow-header></flow-header>
    <div class="form">
      <div class="form-row">
        <span class="key">案卷编号：</span>
        <span class="value">H231293123129</span>
      </div>
      <div class="form-row">
        <span class="key">公文标题：</span>
        <span class="value">站那个有：暗示安徽的哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
      </div>
      <div class="form-row">
        <span class="key">来文单位：</span>
        <span class="value">某某办公厅</span>
      </div>
      <div class="form-row">
        <span class="key">文号：</span>
        <span class="value">国土资源函【2018】320号</span>
      </div>
      <div class="form-row">
        <span class="key">编号：</span>
        <span class="value">F-2131</span>
      </div>
      <div class="form-row">
        <span class="key">收件单位：</span>
        <span class="value">办公室</span>
      </div>
      <div class="form-row">
        <span class="key">收件人：</span>
        <span class="value">周婷</span>
      </div>
      <div class="form-row">
        <span class="key">收件时间：</span>
        <span class="value">2018-07-30</span>
      </div>
    </div>
    <div class="attachment">
      <div class="title">附件列表</div>
      <ul>
        <li>
          <router-link to="/Home">
            <i class="iconfont icon-fapiao"></i>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈.pdf
          </router-link>
        </li>
        <li>
          <router-link to="/Home">
            <i class="iconfont icon-fapiao"></i>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈.pdf
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FlowHeader from './FlowHeader.vue'
export default {
  name: 'Base',
  components: {
    FlowHeader
  }
}
</script>

<style scoped lang='less'>
.base{
  .form{
    padding: 20px;
    .form-row{
      line-height: 1.7;
      .key{
        display: inline-block;
        width: 20%;
        text-align: right;
      }
    }
  }
  .attachment{
    .title{
      height: 70px;
      line-height: 70px;
      margin: 10px 0;
      padding: 0 10px;
      background-color: #f2f2f2;
      font-size: 28px;
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

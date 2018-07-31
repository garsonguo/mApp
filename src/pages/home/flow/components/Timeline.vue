<template>
  <div class="timeline" ref="wrapper">
    <flow-header></flow-header>
    <md-steppers md-vertical>
      <md-step id="first" md-label="收文拟办">
        <div class="name">
          邹国庆
        </div>
        <div class="info">
          <div class="option">
            <span class="label">意见：</span>
            <span>哈哈哈已看，建议某某某参加。</span>
          </div>
          <div class="time">
            <span class="label">办理时间：</span>
            <span>2018-07-31</span>
          </div>
        </div>
      </md-step>

      <md-step id="second" md-label="领导批示">
        <div class="name">
          邹国庆
        </div>
        <div class="info">
          <div class="option">
            <span class="label">意见：</span>
            <span>哈哈哈已看，建议某某某参加。</span>
          </div>
          <div class="time">
            <span class="label">办理时间：</span>
            <span>2018-07-31</span>
          </div>
        </div>
      </md-step>

      <md-step id="third" md-label="承办情况">
        <div class="name">
          邹国庆
        </div>
        <div class="info">
          <div class="option">
            <span class="label">意见：</span>
            <span>哈哈哈已看，建议某某某参加。</span>
          </div>
          <div class="time">
            <span class="label">办理时间：</span>
            <span>2018-07-31</span>
          </div>
        </div>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import FlowHeader from './FlowHeader.vue'
import Bscroll from 'better-scroll'
export default {
  name: 'Timeline',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  components: {
    FlowHeader
  }
}
</script>

<style scoped lang='less'>
.timeline{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .name{
    font-size: 28px;
    font-weight: bolder;
    line-height: 1.7;
  }
  .info{
    line-height: 2.0;
    .label{
      width: 25%;
      text-align: left;
      display: inline-block;
    }
  }
}
</style>

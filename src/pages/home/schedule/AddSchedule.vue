<template>
  <div class="addSchedule">
    <Header :title="title" :path="path"></Header>
    <div class="form">
      <div class="header">
        添加日程安排
      </div>
      <div class="period">
        <van-cell-group>
          <van-field v-model="startTime"  required  clearable  label="开始时间"  @click="handlerStart" />
          <van-field  v-model="endTime"  label="结束时间"  required  />
        </van-cell-group>
      </div>
      <div class="participants">
        <div class="name">参与者：</div>
        <van-checkbox-group v-model="result">
          <van-checkbox  v-for="item of list"  :key="item.id"  :name="item.user"  >
           {{ item.user }}
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="address">
        <van-field  v-model="address"  required  clearable  label="地点"  placeholder="会议室"/>
      </div>
      <div class="address">
        <van-field  v-model="details"  required  clearable  placeholder="会议详情"/>
      </div>
      <div class="btn">
        <van-button type="primary" size="small">提交</van-button>
      </div>
    </div>
    <div class="footer">
        <van-datetime-picker @focus="handlerFocus" v-show="startShow"  v-model="currentDate"  type="datetime"  :min-date="minDate"  :max-date="maxDate"  @confirm="onStartConfirm"  @cancel="cancel"  />
        <van-datetime-picker @focus="handlerFocus" v-show="endShow"  v-model="currentDate"  type="datetime"  :min-date="minDate"  :max-date="maxDate"  @confirm="onEndConfirm"  @cancel="cancel"  />
      </div>
  </div>
</template>

<script>
import Header from '@/common/NavHeader.vue'
import moment from 'moment'
import axios from 'axios'
export default {
  name: 'AddSchedule',
  components: {
    Header
  },
  data () {
    return {
      path: '/Schedule',
      startShow: false,
      endShow: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: '',
      currentDate: new Date(),
      startTime: '',
      endTime: '',
      list: [],
      result: [],
      address: '',
      details: ''
    }
  },
  created () {
    const name = this.$router.history.current.meta.title
    this.title = name
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
    let date = new Date()
    let addDate = date.setFullYear(date.getFullYear() + 1)
    this.maxDate = new Date(addDate)
  },
  mounted () {
    this.getList()
  },
  methods: {
    handlerStart () {
      this.startShow = true
    },
    onStartConfirm (value) {
      let date = moment(value).format('YYYY-MM-DD HH:mm:ss')
      this.startTime = date
      this.startShow = false
    },
    onEndConfirm (value) {
      let date = moment(value).format('YYYY-MM-DD HH:mm:ss')
      this.endTime = date
      this.endShow = false
    },
    cancel () {
      this.startShow = false
      this.endShow = false
    },
    getList () {
      axios.get('/api/addSchedule.json')
        .then(this.getData)
    },
    getData (res) {
      res = res.data
      if (res.ret && res.data) {
        this.list = res.data.list
      }
    },
    handlerFocus () {
      document.activeElement.blur()
    }
  }
}
</script>

<style scoped lang='less'>
.addSchedule{
  .form{
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    .header{
      height: 70px;
      line-height: 70px;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
    }
    .participants{
      padding: 20px;
      border-bottom: 1px solid #ddd;
      .name{
        height: 60px;
        line-height: 60px;
      }
      .van-checkbox-group{
        overflow: hidden;
      }
      .van-checkbox{
        float: left;
        width: 33%;
        height: 60px;
        line-height: 60px;
      }
    }
    .address{
      border-bottom: 1px solid #ddd;
    }
    .btn{
      text-align: center;
      margin: 20px;
    }
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>

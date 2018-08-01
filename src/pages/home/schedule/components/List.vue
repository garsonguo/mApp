<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="item" v-for="item of list" :key="item.id">
        <div class="user">{{item.user}}</div>
        <ul class="info">
          <li v-for="info of item.info" :key="info.id">
            <div class="Period">
              <span class="date">{{info.date}}</span>
              <span class="time">{{info.time}}</span>
            </div>
            <div class="what">
              {{info.what}}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    list: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang='less'>
.list{
  position: absolute;
  top: 280px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .item{
    margin: 20px 0;
    padding: 20px;
    .user{
      color: #2973e3;
      font-size: 32px;
      line-height: 1.7;
    }
    .info{
      li{
        border-bottom: 2px solid #ddd;
        line-height: 1.7;
        padding: 20px 0;
        .Period{
          .date{
            margin-right: 20px;
          }
        }
        .what{
          font-size: 28px;/*px*/
        }
      }
    }
  }
}
</style>

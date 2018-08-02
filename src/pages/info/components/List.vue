<template>
    <div class="list">
        <div class="item" v-for="item of list" :key="item.id">
            <router-link :to="{path:item.path}">
                <div class="left">
                    <i :class=item.icon></i>
                </div>
                <div class="right">
                    <div class="type">
                        {{item.type}}
                    </div>
                    <div class="info">
                        <span class="title">{{item.title}}</span>
                        <span class="date">{{item.date}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    infoList: Array
  },
  data () {
    return {}
  },
  computed: {
    list () {
      const list = this.infoList
      return list
    }
  }
}
</script>

<style scoped lang='less'>
.list {
  .item {
    overflow: hidden;
    height: 148px;
    a{
        color: #333;
    }
    .left {
      float: left;
      width: 20%;
      height: 148px;
      line-height: 148px;
      text-align: center;
      .iconfont{
          padding: 26px;
          border-radius: 50%;
          color: #fff;
          font-size: 46px;
      }
    }
    .right {
      float: left;
      width: 80%;
      height: 148px;
      border-bottom: 1px solid #ddd;
      .type{
          height: 90px;
          line-height: 90px;
          font-size: 32px;
      }
      .info{
          color: #666666;
          font-size: 28px;/*px*/
          .title{
              float: left;
              display: block;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              width: 65%;
          }
          .date{
              float: right;
              padding-right: 20px;
          }
      }
    }
  }
}
</style>

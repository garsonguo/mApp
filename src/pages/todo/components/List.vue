<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="item" v-for="item of list" :key="item.id">
                <div class="num">
                    <i class="iconfont icon-fapiao"></i>
                    <span>{{item.num}}</span>
                </div>
                <div class="title">
                    {{item.title}}
                </div>
                <div class="info">
                    <span class="key">提交人：</span>
                    <span class="value">{{item.name}}</span>
                </div>
                <div class="info">
                    <span class="key">提交时间：</span>
                    <span class="value">{{item.time}}</span>
                </div>
                <div class="info">
                    <span class="key">当前流程：</span>
                    <span class="value">{{item.currentProcess}}</span>
                </div>
                <div class="info">
                    <span class="key">当前环节：</span>
                    <span class="value">{{item.currentLink}}</span>
                </div>
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
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
.list{
    position: absolute;
    top: 230px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    font-size: 28px;/*px*/
    .count{
        height: 70px;
        line-height: 70px;
        background-color: #f2f2f2;
        padding: 0 20px;
    }
    .item{
        padding: 0 20px 20px 20px;
        margin: 10px 0;
        border-bottom: 1px solid #ddd;
        .num{
            height: 60px;
            line-height: 60px;
            color: #9c9c9c;
            .iconfont{
                color: #2d82da;
            }
        }
        .title{
            line-height: 1.5;
            font-size: 32px;/*px*/
            font-weight: bolder;
        }
        .info{
            line-height: 1.7;
            color: #6f6f6f;
        }
    }
}
</style>

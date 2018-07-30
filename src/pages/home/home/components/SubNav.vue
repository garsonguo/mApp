<template>
    <div class="subNav">
        <div class="panel" v-for="item of subNavList" :key="item.id">
            <component v-bind:is="item.isIcon" :logo=item.logo></component>
            <div class="logoName">
                {{item.logoName}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SubNav',
  props: {
    subNavList: Array
  },
  components: {
    noIcon: {
      name: 'noIcon',
      props: {
        logo: String
      },
      template: '<div class="logo" >{{logo}}</div>'
    },
    isIcon: {
      name: 'isIcon',
      props: {
        logo: String
      },
      template: '<div class="logo" ><i :class=logo style="display:block;"></i></div>'
    }
  }
}
</script>

<style scoped lang='less'>
.subNav{
    display: flex;
    height: 202px;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    .panel{
        flex: 1;
        border-right: 1px solid #ddd;
        &:last-child{
            border-right: 0;
        }
        .logo{
            //转换为rem会导致radius时边框糊掉
            border: 1px solid #ddd;/*px*/
            height: 80px;
            width: 80px;
            line-height: 80px;
            margin: auto;
            margin-bottom: 20px;
            border-radius: 10px;
            font-size: 56px;
            color: #101010;
            .iconfont{
                display: block;
            }
        }
        .logoName{
            color: #666666;
        }
    }
}
</style>

<template>
    <div class="commonNav">
        <div class="header">
            常用
        </div>
        <div class="body">
            <div class="panel" v-for="item of commonNavList" :key="item.id">
                <a class="item" :href='item.href'>
                    <div class="logo" :class="item.color">
                        <i class="iconfont" :class="item.icon"></i>
                    </div>
                    <div class="logoName">
                        {{item.logoName}}
                    </div>
                </a>
            </div>
            <div class="panel"></div>
            <div class="panel"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonNav',
  props: {
    commonNavList: Array
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
.commonNav {
  .header {
    height: 82px;
    line-height: 82px;
    border-bottom: 1px solid #ddd;
    padding-left: 20px;
    font-size: 32px; /*px*/
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .panel {
      position: relative;
      width: 25%;
      box-sizing: border-box;
      height: 208px;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      &:nth-child(4n) {
        border-right: 0;
      }
      .item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .logo {
          height: 100px;
          line-height: 100px;
          width: 100px;
          margin: auto;
          margin-bottom: 20px;
          border-radius: 10px;
          .iconfont {
            font-size: 58px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

<template>
    <div class="footer">
      <router-link to="/Flow/Base">
        <p>基本情况</p>
      </router-link>
      <router-link to="/Flow/Timeline" exact>
        <p>办理过程</p>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'FooterBar',
  created () {
    // 不显示底部导航栏
    this.$router.app.$options.store.state.navShow = false
  }
}
</script>

<style scoped lang='less'>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 108px;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  background-color: #fff;
  a {
    text-decoration: none;
    text-align: center;
    color: #333;
    i {
      display: inline-block;
      margin-bottom: 5px;
      font-size: 44px; /*px*/
    }
    p {
      font-size: 28px; /*px*/
      margin: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .router-link-active{
    color: #2774e0;
  }
}
</style>

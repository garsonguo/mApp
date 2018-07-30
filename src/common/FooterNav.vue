<template>
    <div class="footer">
      <router-link to="/Info">
        <i class="iconfont icon-pinglun"></i>
        <p>消息</p>
      </router-link>
      <router-link to="/Home" exact>
        <i class="iconfont icon-fangzi"></i>
        <p>主页</p>
      </router-link>
      <router-link to="/Contacts">
        <i class="iconfont icon-tongxunlu"></i>
        <p>通讯录</p>
      </router-link>
      <router-link to="/My">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'FooterNav'
}
</script>

<style scoped lang='less'>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 118px;
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

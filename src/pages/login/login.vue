<template>
    <div class="login">
        <div class="title">
            {{logo}}
            <p>{{title}}</p>
        </div>
        <form class="form" @submit.prevent="validateBeforeSubmit">
            <van-cell-group>
                <van-field v-model="name" clearable :error-message="errorName" label="账号：" />
                <van-field v-model="password" clearable :error-message="errorPass" label="密码：" />
            </van-cell-group>
            <button class="btn" type="submit">登录</button>
        </form>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data () {
    return {
      logo: 'Xiaobog移动办公App',
      title: '电子政务',
      name: null,
      password: null,
      errorName: '',
      errorPass: ''
    }
  },
  methods: {
    validateBeforeSubmit () {
      const loginInfo = {
        name: this.name,
        password: this.password
      }
      if (loginInfo.name && loginInfo.password) {
        Cookies.set('loginInfo', loginInfo)
        this.$router.push({
          name: 'Home'
        })
      } else if (!loginInfo.name) {
        this.errorName = '请输入账号'
      } else {
        this.errorPass = '请输入密码'
      }
    }
  }
}
</script>

<style scoped lang='less'>
.login{
    .title{
        text-align: center;
        font-size: 60px;/*px*/
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        p{
            margin-top: 20px;
            font-size: 40px;/*px*/
        }
    }
    .form{
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        text-align: center;
        font-size: 32px;
        .btn{
            height: 80px;
            line-height: 80px;
            background-color: #4da9ec;
            border-color: #4da9ec;
            color: #fff;
            width: 80%;
            margin: 40px auto;
        }
    }
}
</style>

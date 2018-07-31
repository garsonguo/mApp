<template>
    <div class="login">
        <div class="title">
            {{logo}}
            <p>{{title}}</p>
        </div>
        <form class="form" @submit.prevent="validateBeforeSubmit">
            <div class="form-control">
                <label for="name">账号：</label>
                <input v-validate="'required'" type="text" name="name" id="name" v-model="name">
            </div>
            <span v-show="errors.has('name')" class="is-danger">{{ errors.first('name') }}</span>
            <div class="form-control">
                <label for="password">密码：</label>
                <input v-validate="'required'" type="text" name="password" id="password" v-model="password">
            </div>
            <span v-show="errors.has('password')" class="is-danger">{{ errors.first('password') }}</span>
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
      password: null
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const loginInfo = {
            name: this.name,
            password: this.password,
            auth: true
          }
          Cookies.set('loginInfo', loginInfo)
          this.$router.push({
            name: 'Home'
          })
        }
      })
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
        .is-danger{
            color: red;
            display: block;
            font-size: 24px;/*px*/
            text-align: left;
            margin: 20px 10%;
        }
        .form-control{
            height: 100px;
            line-height: 100px;
            border-bottom: 1px solid #ddd;/*px*/
            margin: 20px 10%;
            position: relative;
            label{
                position: absolute;
                left: 0;
                width: 20%;
            }
            input{
                position: absolute;
                left: 20%;
                height: 99%;
                box-sizing: border-box;
                width: 80%;
                padding: 0 20px;
            }
        }
        .btn{
            height: 80px;
            line-height: 80px;
            background-color: #4da9ec;
            border-color: #4da9ec;
            color: #fff;
            width: 80%;
            margin: auto;
        }
    }
}
</style>

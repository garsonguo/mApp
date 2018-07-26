<template>
    <div class="myList">
        <div v-show="!show">
            <div class="item" @click="resetPass">
                <div class="icon">
                    <i class="iconfont icon-shezhi"></i>
                </div>
                <div class="info">重置密码
                    <i class="iconfont icon-jinrujiantou"></i>
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="iconfont icon-wenda"></i>
                </div>
                <div class="info">帮助中心
                    <i class="iconfont icon-jinrujiantou"></i>
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <i class="iconfont icon-guanbi"></i>
                </div>
                <div @click="loginOut" class="info">退出登录
                    <i class="iconfont icon-jinrujiantou"></i>
                </div>
            </div>
        </div>
        <div class="resetPassword" v-show="show">
            <div class="form-control">
                <label for="newPass">新密码</label>
                <input type="text" name="newPass">
            </div>
            <div class="form-control">
                <label for="okNewPass">确认新密码</label>
                <input type="text" name="okNewPass">
            </div>
            <div class="btn-group">
                <button @click="ok" class="btn"><i class="iconfont icon-duihao"></i>确认</button>
                <button class="btn"><i class="iconfont icon-xiugai"></i>重置</button>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'MyList',
  data () {
    return {
      show: false
    }
  },
  methods: {
    resetPass () {
      this.show = true
    },
    ok () {
      this.show = false
    },
    loginOut () {
      // dispatch 返回的是Promise  所以有then回调
      this.$store.dispatch('LoginOut')
        .then(() => {
          this.$router.push({
            'path': '/Login',
            'name': 'Login'
          })
        })
    }
    // ...mapMutations(['LoginOut'])
  }
}
</script>

<style scoped lang='less'>
.myList{
    .item{
        position: relative;
        height: 116px;
        line-height: 116px;
        margin: 0 20px;
        font-size: 32px;/*px*/
        .icon{
            position: absolute;
            left: 0;
            width: 10%;
            text-align: center;
            .iconfont{
                font-size: 32px;/*px*/
                color: #4da9ec;
                font-weight: bolder;
            }
        }
        .info{
            position: absolute;
            right: 0;
            border-bottom: 1px solid #ddd;
            width: 90%;
            .iconfont{
                float: right;
                font-size: 32px;/*px*/
                margin-right: 20px;
            }
        }
    }
    .resetPassword{
        margin: 0 20px;
        font-size: 28px;
        .form-control{
            height: 116px;
            line-height: 116px;
            position: relative;
            label{
                position: absolute;
                left: 0;
                width: 20%;
                text-align: right;
            }
            input{
                font-size: 28px;
                position: absolute;
                right: 0;
                width: 80%;
                height: 100%;
                padding: 0 20px;
                box-sizing: border-box;
                border: 0;
                border-bottom: 1px solid #ddd;/*px*/
            }
        }
        .btn-group{
            text-align: center;
            margin: 20px;
            .btn{
                border: 1px solid #4da9ec;
                padding: 10px 20px;
                background-color: #fff;
                color: #4da9ec;
                margin: 0 10px;
                .iconfont{
                    font-weight: bolder;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>

import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
const config = {
  locale: 'zh_CN'
}
Vue.use(VeeValidate, config)

const dict = {
  custom: {
    password: {
      required: '密码不能为空'
    },
    name: {
      required: () => '姓名不能为空'
    }
  }
}
Validator.localize('zh_CN', dict)

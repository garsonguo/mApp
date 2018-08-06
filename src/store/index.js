import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { getToken, setToken, removeToken, setUserInfo } from '@/utils/auth'
import { loginByUsername, loginOut } from '@/api/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navShow: false,
    token: getToken()
  },
  actions: {
    LoginOut () {
      return new Promise((resolve, reject) => {
        loginOut().then(response => {
          Cookies.remove('loginInfo')
          removeToken()
          resolve(response)
        })
      })
    },
    LoginIn ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        const name = userInfo.name.trim()
        loginByUsername(name, userInfo.password).then(response => {
          const data = response.data
          commit('SetToken', data.token)
          setToken(data.token)
          setUserInfo(userInfo)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    navShowFlase () {
      this.state.navShow = false
    },
    SetToken (state, token) {
      state.token = token
    }
  }
})

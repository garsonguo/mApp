import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import { getToken, setToken, removeToken, setUserInfo } from '@/utils/auth'
import { loginByUsername } from '@/api/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navShow: false,
    token: getToken()
  },
  actions: {
    LoginOut ({commit}) {
      commit('LoginOut')
      removeToken()
    },
    LoginIn ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        const name = userInfo.name.trim()
        loginByUsername(name, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          setUserInfo(userInfo)
          commit('SetToken', data.token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    LoginOut () {
      Cookies.remove('loginInfo')
      this.state.auth = false
    },
    navShowFlase () {
      this.state.navShow = false
    },
    SetToken (state, token) {
      state.token = token
    }
  }
})

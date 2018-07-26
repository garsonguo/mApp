import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navShow: false,
    auth: false
  },
  actions: {
    LoginOut (context) {
      context.commit('LoginOut')
    }
  },
  mutations: {
    LoginOut () {
      Cookies.remove('loginInfo')
      this.state.auth = false
    }
  }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
// import VueMaterial from 'vue-material'
import { MdSteppers, MdButton } from 'vue-material/dist/components'
import Vant from 'vant'
import './assets/js/validate'

import 'swiper/dist/css/swiper.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'lib-flexible/flexible'
import 'vant/lib/vant-css/index.css'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/border.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
// Vue.use(VueMaterial)
Vue.use(MdSteppers)
Vue.use(MdButton)
Vue.use(Vant)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

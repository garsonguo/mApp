// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'

import 'lib-flexible/flexible'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/border.css'
import './assets/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

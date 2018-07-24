import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import Info from '@/pages/info/Info'
import Home from '@/pages/home/Home'
import Contacts from '@/pages/contacts/Contacts'
import My from '@/pages/my/My'
import Login from '@/pages/login/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: Login
    },
    {
      path: '/Login',
      name: 'Login',
      title: '登录',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      title: '首页',
      component: Home,
      children: [{
        path: '/ajbl',
        component: Home
      }]
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 全局路由守卫
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const name = to.name
  if (name === 'Login') {
    router.app.$options.store.state.navShow = false
  } else {
    // 获取store的state并修改
    router.app.$options.store.state.navShow = true
  }
  if ((!Cookies.get('name') && name !== 'Login')) {
    router.app.$options.store.state.navShow = false
    // 判断是否已经登录且前往的页面不是登录页
    next({
      path: '/Login'
    })
  } else if (Cookies.get('name') && name === 'Login') {
    router.app.$options.store.state.navShow = true
    // 判断是否已经登录且前往的是登录页
    next({
      path: '/Home'
    })
  } else {
    router.app.$options.store.state.navShow = true
    next()
  }
})

export default router

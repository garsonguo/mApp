import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

// 登录页
import loginRouter from './loginRouter'
// 消息页
import infoRuter from './infoRouter'
// 通讯录
import contactsRouter from './contactsRouter'
// 我的
import myRouter from './myRouter'
// 主页
import homeRouter from './homeRouter'

Vue.use(Router)

// 拼接路由
let routers = [loginRouter, infoRuter, contactsRouter, myRouter]
routers.push(...homeRouter)

const router = new Router({
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
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
  // 获取用户信息
  const userKey = Cookies.get('loginInfo')
  if (!userKey && name !== 'Login') {
    // 判断是否已经登录且前往的页面不是登录页
    router.app.$options.store.state.navShow = false
    next({
      path: '/Login'
    })
  } else if (userKey && name === 'Login') {
    // 判断是否已经登录且前往的是登录页
    router.app.$options.store.state.navShow = true
    next({
      path: '/Home'
    })
  } else {
    next()
  }
})

export default router

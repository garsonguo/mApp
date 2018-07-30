import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
// 消息页
import Info from '@/pages/info/Info'
// 主页
import Home from '@/pages/home/home/Home'
import Todo from '@/pages/home/todo/Todo'
import Read from '@/pages/home/read/Read'
import List from '@/pages/home/read/components/List'
import News from '@/pages/home/news/News'
import NewsDetail from '@/pages/home/news/NewsDetail'
import NewsList from '@/pages/home/news/components/List'
import Timeline from '@/pages/home/timeline/Timeline'
// 通讯录
import Contacts from '@/pages/contacts/Contacts'
// 我的
import My from '@/pages/my/My'
// 登录页
import Login from '@/pages/login/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info,
      meta: {
        title: '信息'
      }
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts,
      meta: {
        title: '通讯'
      }
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/Todo/1',
      name: 'Todo',
      component: Todo,
      meta: {
        title: '代办案卷'
      }
    },
    {
      path: '/Todo/2',
      name: 'Todo',
      component: Todo,
      meta: {
        title: '公共收文'
      }
    },
    {
      path: '/Todo/3',
      name: 'Todo',
      component: Todo,
      meta: {
        title: '公共发文'
      }
    },
    {
      path: '/Read',
      name: 'Read',
      component: Read,
      redirect: '/Read/List/1', // 嵌套默认路由
      meta: {
        title: '公共阅文'
      },
      children: [{
        path: 'List/:id',
        name: 'List',
        component: List,
        meta: {
          title: '公共阅文'
        }
      }]
    },
    {
      path: '/News',
      name: 'News',
      component: News,
      redirect: '/News/List/1', // 嵌套默认路由
      meta: {
        title: '新闻中心'
      },
      children: [{
        path: 'List/:id',
        name: 'NewsList',
        component: NewsList,
        meta: {
          title: '新闻中心'
        }
      }]
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: Timeline
    }
  ],
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

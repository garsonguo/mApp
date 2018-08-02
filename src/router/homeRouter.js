// 主页
import Home from '@/pages/home/home/Home'
// 日程安排
import Schedule from '@/pages/home/schedule/Schedule'
import AddSchedule from '@/pages/home/schedule/AddSchedule'
// 代办案卷---公文收文---公文发文
import Todo from '@/pages/home/todo/Todo'
// 代办案卷/公文收文/公文发文---->流程页
import Flow from '@/pages/home/flow/Flow'
import Timeline from '@/pages/home/flow/components/Timeline'
import Base from '@/pages/home/flow/components/Base'
import Transfer from '@/pages/home/flow/Transfer'
// 新闻中心
import News from '@/pages/home/news/News'
import NewsDetail from '@/pages/home/news/NewsDetail'
import NewsList from '@/pages/home/news/components/List'
// 公共阅文
import Read from '@/pages/home/read/Read'
import List from '@/pages/home/read/components/List'

// 主页
const defaultRouter = {path: '/', redirect: Home}
const home = {path: '/Home', name: 'Home', component: Home, meta: {title: '首页'}}
/* ---日程安排--- */
// 日程安排
const schedule = {path: '/Schedule', name: 'Schedule', component: Schedule, meta: {title: '日程安排'}}
// 增加日程
const addSchedule = {path: '/AddSchedule', name: 'AddSchedule', component: AddSchedule, meta: {title: '增加日程'}}

/* ---代办案卷/公文收文/公文发文--- */
// 代办案卷
const todo1 = {path: '/Todo/1', name: 'Todo', component: Todo, meta: {title: '代办案卷'}}

// 公文收文
const todo2 = {path: '/Todo/2', name: 'Todo', component: Todo, meta: {title: '公共收文'}}

// 公文发文
const todo3 = {path: '/Todo/3', name: 'Todo', component: Todo, meta: {title: '公共发文'}}

// 代办案卷/公文收文/公文发文---->流程页
const flow = {
  path: '/Flow',
  name: 'Flow',
  component: Flow,
  children: [{
    path: 'Timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: 'Base',
    name: 'Base',
    component: Base
  }]
}
// 代办案卷/公文收文/公文发文---->流程页--->移交
const transfer = {path: '/Transfer', name: 'Transfer', component: Transfer, meta: {title: '移交'}}

/* ---新闻中心--- */
// 新闻中心
const news = {
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
}
// 新闻详情页
const newsDerail = {path: '/NewsDetail', name: 'NewsDetail', component: NewsDetail}

/* ---公共阅文--- */
const read = {
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
}

const homeRouter = [
  defaultRouter,
  home,
  schedule,
  addSchedule,
  todo1,
  todo2,
  todo3,
  flow,
  transfer,
  news,
  newsDerail,
  read
]
export default homeRouter

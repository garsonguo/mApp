import Mock from 'mockjs'
import loginAPI from './login'
import todoAPI from './todo'
import readAPI from './read'
import newsAPI from './news'
// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

// 首页相关
// 待办列表
Mock.mock(/\/todo\/getList/, 'get', todoAPI.getList)
// 公共阅文
Mock.mock(/\/read\/getList/, 'get', readAPI.getList)
// 新闻中心
Mock.mock(/\/news\/getList/, 'get', newsAPI.getList)
Mock.mock(/\/news\/getDetail/, 'get', newsAPI.getDetail)

export default Mock

import Mock from 'mockjs'
import { param2Obj } from '@/utils'
let todoList = []
const count = 20
const Random = Mock.Random
for (let i = 0; i < count; i++) {
  todoList.push(Mock.mock({
    id: '@increment',
    title: Random.csentence(5, 30),
    date: Random.date(),
    organization: '省厅新闻'
  }))
}
export default {
  getList: (query) => {
    let {limit, page} = param2Obj(query.url)
    let list = todoList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      list: list,
      count: count
    }
  }
}

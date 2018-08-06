import Mock from 'mockjs'
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
  getList: () => {
    return {
      list: todoList,
      count: count
    }
  }
}

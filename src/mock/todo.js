import Mock from 'mockjs'
let todoList = []
const count = 20
const Random = Mock.Random
for (let i = 0; i < count; i++) {
  todoList.push(Mock.mock({
    id: '@increment',
    num: Random.date('T'),
    title: Random.csentence(5, 30),
    time: Random.date(),
    name: Random.cname(),
    currentProcess: '公文转收入',
    currentLink: '处室承办'
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

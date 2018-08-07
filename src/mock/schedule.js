import Mock from 'mockjs'
let todoList = []
const count = 20
const Random = Mock.Random
for (let i = 0; i < count; i++) {
  todoList.push(Mock.mock({
    id: '@increment',
    user: Random.cname(),
    info: [{
      id: '@increment',
      date: Random.date(),
      time: Random.time('A HH:mm:ss') + '-' + Random.time('HH:mm:ss'),
      what: Random.csentence(5, 30)
    },
    {
      id: '@increment',
      date: Random.date(),
      time: Random.time('A HH:mm:ss') + '-' + Random.time('HH:mm:ss'),
      what: Random.csentence(5, 30)
    }]
  }))
}
export default {
  getList: () => {
    return {
      list: todoList
    }
  }
}

import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const Random = Mock.Random
let flow = Mock.mock({
  ajbh: 'H' + Random.natural(10000),
  gwbt: Random.csentence(5, 30),
  lwdw: '某某办公厅',
  wh: '国土资源函【' + Random.natural(2015, 2018) + '】' + Random.natural(1, 999) + '号',
  bh: 'F-' + Random.natural(1, 100),
  sjdw: '办公室',
  sjr: Random.cname(),
  sjsj: Random.date(),
  fjList: [{
    id: '@increment',
    name: Random.csentence(5, 30) + '.pdf'
  },
  {
    id: '@increment',
    name: Random.csentence(5, 30) + '.pdf'
  }]
})

// 移交
const count = 6
let officeList = []
let archiveList = []
let assistingList = []
for (let i = 0; i < count; i++) {
  officeList.push(Mock.mock({
    id: Random.guid(),
    name: Random.cname()
  }))
  archiveList.push(Mock.mock({
    id: Random.guid(),
    name: Random.cname()
  }))
  assistingList.push(Mock.mock({
    id: Random.guid(),
    name: Random.cname()
  }))
}

export default {
  getFlow: (query) => {
    let {id} = param2Obj(query.url)
    console.log('id:' + id)
    return flow
  },
  getTransfer: () => {
    return {
      officeList,
      archiveList,
      assistingList
    }
  }
}

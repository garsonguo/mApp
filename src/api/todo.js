import request from '@/utils/request.js'

export function fetchList () {
  return request({
    url: '/todo/getList',
    method: 'get'
  })
}

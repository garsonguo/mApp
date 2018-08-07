import request from '@/utils/request.js'

export function fetchList () {
  return request({
    url: '/schedule/getList',
    method: 'get'
  })
}

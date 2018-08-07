import request from '@/utils/request.js'

export function fetchList (query) {
  return request({
    url: '/todo/getList',
    method: 'get',
    params: query
  })
}

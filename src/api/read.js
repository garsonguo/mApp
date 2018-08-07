import request from '@/utils/request.js'

export function fetchList (query) {
  return request({
    url: '/read/getList',
    method: 'get',
    params: query
  })
}

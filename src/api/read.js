import request from '@/utils/request.js'

export function fetchList () {
  return request({
    url: '/read/getList',
    method: 'get'
  })
}

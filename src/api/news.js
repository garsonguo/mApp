import request from '@/utils/request.js'

export function fetchList (query) {
  return request({
    url: '/news/getList',
    method: 'get',
    params: query
  })
}

export function getDetail () {
  return request({
    url: '/news/getDetail',
    method: 'get'
  })
}

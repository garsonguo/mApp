import request from '@/utils/request.js'

export function fetchList () {
  return request({
    url: '/news/getList',
    method: 'get'
  })
}

export function getDetail () {
  return request({
    url: '/news/getDetail',
    method: 'get'
  })
}

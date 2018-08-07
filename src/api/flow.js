import request from '@/utils/request.js'

export function getFlow (id) {
  return request({
    url: '/flow/getFlow',
    method: 'get',
    params: id
  })
}

export function getTransfer (id) {
  return request({
    url: '/flow/getTransfer',
    method: 'get',
    params: id
  })
}

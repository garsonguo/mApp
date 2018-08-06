import request from '@/utils/request.js'

export function loginByUsername (name, password) {
  let data = {
    name,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function loginOut () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

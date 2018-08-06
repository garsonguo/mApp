const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin'
  }
}

export default {
  loginByUsername: config => {
    const { name } = JSON.parse(config.body)
    return userMap[name]
  },
  logout: () => 'success'
}

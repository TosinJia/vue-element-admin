import request from '@/utils/request'

// 由于axios每一个都是一个实例，你的请求都是基于这个实例来的，所以所以配置的参数属性都继承了下来.
// 你可以直接这样使用，之前拦截器写的东西都是生效的，
// 它自动会有一个你之前配置的baseURL,
// 但你说我这个请求baseURL和其它的不同,
// 这也是很方便的，你可以字请求内部修改，
// 它会自动覆盖你在创建实例时候写的参数如
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

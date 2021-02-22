import axios from 'axios'

/**
 * 注册
 * @param data
 */
export function signIn (data) {
  return axios({
    method: 'post',
    url: 'https://conduit.productionready.io/api/users',
    data: {
      user: data,
    },
  }).then(data => data.data)
}

/**
 * 登录
 */
export function login (data) {
  return axios({
    method: 'post',
    url: 'https://conduit.productionready.io/api/users/login',
    data: {
      user: data,
    },
  }).then(data => data.data)
}

import axios from 'axios'

export function login(userInfo) {
  return axios.post('/login/login', userInfo)
}

export function userInfo() {
  return axios.post('/user/getInfo')
}

export function logout() {
  return axios.post('/login/logout')
}
// 將全部的外部呼叫集中在此
// 缺點是多層架構難以追錯
import { request } from './request';

export function getLogin (loginForm) {
  return request({
    url: '/login',
    method: 'post',
    data: loginForm
  })
}
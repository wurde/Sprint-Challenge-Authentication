/**
 * Dependencies
 */

import axios from 'axios'

/**
 * Define axios interceptor
 */

axios.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem('jwt')

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

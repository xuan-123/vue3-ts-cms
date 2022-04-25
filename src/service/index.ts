import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (res) => {
      console.log('单独请求拦截')
      return res
    },
    responseInterceptor: (res) => {
      console.log('单独响应拦截')
      return res
    }
  }
})
export default hyRequest

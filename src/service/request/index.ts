import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  responseInterceptor?: (res: any) => any
}
interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor
    )
    this.instance.interceptors.request.use((config) => {
      console.log('全局请求')
      return config
    })
    this.instance.interceptors.response.use((res) => {
      console.log('全局响应')
      return res
    })
  }
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
export default HYRequest

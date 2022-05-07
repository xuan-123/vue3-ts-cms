import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// import { ElLoading } from 'element-plus/lib/components'
//定义一个自己的关于拦截器的接口用于补充到axios内部AxiosRequestConfig类内部
interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (err: any) => any
}
//定义一个接口用来继承AxiosRequestConfig内的类，并追加关于interceptors拦截器的类。
interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors //前台hook对应的类
}
//可以让用户创建多个实例（多个baseURL，不同服务器）
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    //现在类中就包含baseURL和interceptors等所有参数了
    //config是axios的baseUrl和前台传来的url等
    this.instance = axios.create(config) //将axios实例赋值到当前属性内部
    this.interceptors = config.interceptors //将定义好的拦截器传到当前属性内部
    //通过axios的拦截器调用从实例传进来的伪拦截器方法并执行
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor, //如果有定义请求拦截则继续调用
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use((config) => {
      // ElLoading.service()
      return config
    })
    this.instance.interceptors.response.use((res) => {
      const data = res.data //过滤响应数据中data中的数据
      return data
    })
  }
  //这儿的config是前台传进来的数据（url,methods）
  request<T>(config: HYRequestConfig): Promise<T> {
    //通过promise返回，用于前台使用then来拿到返回
    return new Promise((resolve, reject) => {
      //如下是通过axios实例调用内部request来得到返回
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //发请求
          if (config.interceptors?.responseInterceptor) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export default HYRequest

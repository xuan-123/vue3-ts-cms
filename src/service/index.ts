import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from '@/utils/cache'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    /**
      interceptors是自定义的拦截器hook,
      优点：可以供不同的实例写入不同的拦截器,而非写死到全局类，
      缺点：如公共的拦截器都要在不同的实例中写一遍
        定义的方法内部的执行代码是用来传
      给axios的interceptors.request.use用的
     */

    requestInterceptor: (res: any) => {
      //携带token拦截
      const token = LocalCache.getCache('token')
      if (token) {
        res.headers.Authorization = `Bearer ${token}`
      }
      return res
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default hyRequest

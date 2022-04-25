import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { element } from './global/element/index'
import hyRequest from './service'
interface DataFace {
  data: any
  returnCode: string
  success: boolean
}
hyRequest
  .request<DataFace>({
    url: '/home/multidata',
    method: 'get'
  })
  .then((res) => {
    console.log('11111')
    console.log(res)
  })

const app = createApp(App)
// app.use(element)
element(app)
app.use(router)
app.use(store)
app.mount('#app')

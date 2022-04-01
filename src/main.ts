import { createApp } from 'vue'
import App from './App.vue'
import { globalApp } from './global/index'
import 'normalize.css'
import './assets/css/index.less'
// import '@element-plus/icons-vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

// document.title = 'afda'
const app = createApp(App)
//注册element-plus插件
app.use(globalApp)
// globalApp(app)
app.use(router)
app.use(store)
setupStore()
// app.use(ElementPlus)
app.mount('#app')

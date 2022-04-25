//注册element单独引入
import { App } from 'vue'
import register from './register'
export function element(app: App<Element>): void {
  register(app)
}

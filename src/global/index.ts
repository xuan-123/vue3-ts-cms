/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { App } from 'vue' //用于下边app定义类型使用引用
import register from './register'
export function globalApp(app: App<Element>): void {
  register(app)
}

import 'element-plus/theme-chalk/index.css'
import {
  ElButton,
  ElColorPicker,
  ElAlert,
  ElPopconfirm,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElButtonGroup,
  ElCheckbox,
  ElLink
} from 'element-plus/lib/components'
import { App } from 'vue' //用于下边app定义类型使用引用
// import { ElForm, ElFormItem, ElInput } from 'element-plus'
const components = [
  ElButton,
  ElColorPicker,
  ElAlert,
  ElPopconfirm,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElButtonGroup,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

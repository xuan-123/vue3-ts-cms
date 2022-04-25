import 'element-plus/dist/index.css'
import { ElButton, ElSwitch, ElSlider } from 'element-plus'
import { App } from 'vue'
const components = [ElButton, ElSwitch, ElSlider]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
// app.component(ElButton.name, ElButton)

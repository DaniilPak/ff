import { initApp } from './app/index'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'

const app = initApp()
app.use(Antd).mount('#app')

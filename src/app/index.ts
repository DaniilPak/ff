import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../App.vue'
import router from '../router'
import '../assets/main.css'

export function initApp() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  return app
}

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bulma/css/bulma.min.css'
import App from '../App.vue'
import router from './providers/router/'

export function initApp() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  return app
}

import { initApp } from './app/index'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'

import { provideApolloClient } from '@vue/apollo-composable'
import { client } from './app/providers/apollo'

const app = initApp()
provideApolloClient(client)
app.use(Antd).mount('#app')

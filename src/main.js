import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import ru from 'element-plus/dist/locale/ru.mjs'
import 'element-plus/dist/index.css'
import './assets/common-ui.css'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(ElementPlus, { locale: ru }).mount('#app')

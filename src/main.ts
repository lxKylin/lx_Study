import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'element-plus/dist/index.css'
// 注册element-plus所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/mock/index'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).mount('#app')

import { createApp } from 'vue'
import './style.css'
import './tailwindcss.css'
import App from './App.vue'
import {createPinia} from 'pinia';
import piniaPersist from 'pinia-plugin-persist'
import router from './router.js';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App)
app.use(router);
// 自动引入图标
 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   // console.dir(key, component)
  app.component(key, component)
}
app.use(ElementPlus)

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia);

app.mount('#app')

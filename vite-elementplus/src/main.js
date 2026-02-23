import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia';
import router from './router.js';
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// // 自动引入图标
// Object.keys(ElementPlusIconsVue).forEach((key) => {
//   app.component(key, ElementPlusIconsVue[key]);
// });

const app = createApp(App)
const pinia = createPinia()
app.use(router);
app.use(pinia);
//app.use(ElementPlus)
app.mount('#app')

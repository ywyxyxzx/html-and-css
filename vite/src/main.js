import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router.js'
import storeVuex from './store/index.js'
const pinia = createPinia()
const app = createApp(App)

app.use(storeVuex)

app.use(pinia);
app.use(router);
app.mount('#app')

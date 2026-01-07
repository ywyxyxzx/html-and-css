import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import RouterView from './router-view.vue';
import router from './router';
const app = createApp(App)
app.use(router);
//app.component('RouterView', RouterView);
app.mount('#app');

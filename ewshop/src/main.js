
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './base.css';
import './tailMain.css';
import VueLazyload from 'vue-lazyload'

// app init
const app = createApp(App)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//
app.use(VueLazyload)
app.use(store).use(router).mount('#app')

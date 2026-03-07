
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './base.css';
import './tailMain.css';
import "vant/lib/index.css"
import VueLazyload from 'vue-lazyload'
import { Swipe, SwipeItem } from 'vant';

// app init
const app = createApp(App)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//
app.use(VueLazyload)
app.use(Swipe)
app.use(SwipeItem)

app.use(store).use(router).mount('#app')

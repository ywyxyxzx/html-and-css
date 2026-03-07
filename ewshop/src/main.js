
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './base.css';
import './tailMain.css';
import "vant/lib/index.css"
import { Swipe, SwipeItem ,Badge} from 'vant';

// app init
const app = createApp(App)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//
app.use(Swipe)
app.use(SwipeItem)
app.use(Badge)

// app.use(LazyLoad, {
//     lazyComponent: true,
//     loading: require('./assets/images/default.png')
// })
app.use(store).use(router).mount('#app')

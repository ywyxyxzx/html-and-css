
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './base.css';
import './tailMain.css';
import "vant/lib/index.css"
import * as vantModule from './vantModule.js'

// app init
const app = createApp(App)
// vant
Object.keys(vantModule).forEach(key =>{
    app.use(vantModule[key])
})

// app.use(LazyLoad, {
//     lazyComponent: true,
//     loading: require('./assets/images/default.png')
// })
app.use(store).use(router).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './base.css';
import './tailMain.css';
import "vant/lib/index.css"
import * as vantModule from './vantModule.js'
import storeVuex from './store/index';
// app init
const app = createApp(App)
// vant
Object.keys(vantModule).forEach(key =>{
    if(key == 'Lazyload'){
        app.use(vantModule[key],{
            lazyComponent: true,
            loading: require('./assets/images/default.png')
        })
        return
    }
    app.use(vantModule[key])
})

// app.use(LazyLoad, {
//     lazyComponent: true,
//     loading: require('./assets/images/default.png')
// })
app.use(storeVuex).use(router).mount('#app')

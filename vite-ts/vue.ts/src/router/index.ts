

import {ref} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/home.vue';
import About from '../components/about.vue';
const path1 = ref(window.location.pathname);
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: Home},
        {path:'/about', component: About}
    ]
})
export default router;
export {path1}
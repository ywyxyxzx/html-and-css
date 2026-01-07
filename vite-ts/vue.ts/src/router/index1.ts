import Home from '../components/home.vue';
import About from '../components/about.vue';
import {ref} from 'vue';
const path1 = ref(window.location.pathname);
const router = {
    routes:[
        {path:'/', component: Home},
        {path:'/about', component: About}
    ]
}
export default router;
export {path1}
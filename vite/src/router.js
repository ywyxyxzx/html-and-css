import {createRouter, createWebHistory} from "vue-router";

import child1 from './components/child1.vue';
import child2 from './components/child2.vue';
import child3 from './components/child3.vue';

const routes = [
    {
        path: '/',
        redirect: '/one'
    },
    {
        path: '/one',
        name: 'one',
        component: ()=>import("./components/child1.vue")
    },

    {
        path: '/two',
        name: 'two',
        component: ()=>import('./components/child2.vue'),
        children: [
            {
                path: 'three',
                name: 'three',
                component: ()=>import('./components/child3.vue'),
                meta:{isAuth:true}
            }
        ]
    }
]

const router = createRouter({
     history: createWebHistory(),
    linkActiveClass: 'nav-link-active',
    routes:routes
})

router.beforeEach((to, from , next)=>{

    if(to.meta && to.meta.hasOwnProperty("isAuth")){
        if(to.meta.isAuth){
            next()
        } else {
            alert('请先登录')
        }
    } else {
        next()
    }
})

export default router;
import { createRouter, createWebHashHistory } from "vue-router";

const router= createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect: '/home'
        },{
            path:'/home',
            name: 'home',
            component: ()=>import("./pages/home.vue")

        }

    ]  
})
export default router;
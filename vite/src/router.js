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
        component: child1
    },

    {
        path: '/two',
        name: 'two',
        component: child2,
        children: [
            {
                path: 'three',
                name: 'three',
                component: child3
            }
        ]
    }
]

const router = createRouter({
     history: createWebHistory(),
    linkActiveClass: 'nav-link-active',
    routes:routes
})
export default router;


import {ref} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/home.vue';
import Article from '../components/article.vue';
import ArticleFile from "../components/ArticleFile.vue";
import User from "../components/User.vue";
import UserInfo from "../components/UserInfo.vue";
import NotFound from '../components/not-found.vue';
const path1 = ref(window.location.pathname);
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'ex-active',
  //  linkExactActiveClass: 'ex-active',
    routes:[
        {
            path:'/', 
            component: Home,
            name:'home',
            meta:{class: 'home'}
        },
        {
            path:'/article', 
            component: Article,
            name:'article',
             meta:{class: 'article'}

        },
        {
            path:'/show/article-:id(.*)', 
            component: ArticleFile,
            name:'AritcleFile',
             meta:{class: 'article-file'}

        },
          {
            path:'/user', 
            component: User,
            name:'userManger',
             meta:{class: 'user-manger'}

        },
          {
            path:'/user/user-:id(.*)', 
            component: UserInfo,
            name:'user',
             meta:{class: 'user-info'}

        }
        ,{
            path: "/:any(.*)",
            component: NotFound,
            name:"notFound",
             meta:{class: 'not-found404'}
        }
    ]
})
export default router;
export {path1}
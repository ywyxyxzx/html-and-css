

import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import User from "../components/User.vue";
// @ts-ignore
import UserInfo from "../components/UserInfo.vue";
import NotFound from '../components/not-found.vue';
// @ts-ignore
import NavUser from "../components/nav-user.vue";
import { logincheck } from '../helper';

import MemberIndex from "../components/member-index.vue"

const path1 = ref(window.location.pathname);
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'nav-link-active',
  //  linkExactActiveClass: 'ex-active',
  routes: [
     {
          path: '/',
          component: ()=>import('../components/home.vue') ,
          name: 'home',
          meta: { class: 'home' }
        },
    {
      path: '/front',
      component: ()=>import('../components/front.vue'),
      name: 'front',
      meta: { class: 'front', },
       alias: ['/m'],
      children: [
       
        {
          path: 'article',
          component: ()=>import('../components/article.vue'),
          name: 'article',
          meta: { class: 'article' },
      //    beforeEnter: [logincheck]

        },
        
        {
          path: 'show/article-:id(.*)',
          // @ts-ignore
          component: ()=>import('../components/articleFile.vue'),
          name: 'AritcleFile',
          meta: { class: 'article-file' }

        },
        {
          path: 'user',
          // components: {
          //   default: User,
          //   nav: NavUser
          // },
          component:()=> import('../components/User.vue'),
          name: 'userManger',
          meta: { class: 'user-manger' }

        },
        {
          path: 'user/:id(.*)',
          component: ()=> import('../components/UserInfo.vue'),
          name: 'user',
          meta: { class: 'user-info' }

        }

      ]
    },
    {
      path: '/member',
      component: ()=>import('../components/member.vue'),
      name: 'member',
      meta: { class: 'member' },
      children: [
        {
          path: '',
          name: 'member-index',
          component:  MemberIndex
        },
        {
          path: 'mobile',
          name: 'mobile',
          component: ()=>import('../components/mobile.vue')
        },
        {
          path: 'email',
          name: 'email',
          component: ()=>import('../components/email.vue')
        }
      ]
    },
    {
      path: '/login',
      component: ()=>import('../components/login.vue'),
      name: 'login',
    },    
    {
      path: "/:any(.*)",
      component: NotFound,
      name: "notFound",
      meta: { class: 'not-found404' }
    }

  ]
})
 router.beforeEach( (to,from ,next)=>{
// //  return await new Promise(resolve=>{
// //     resolve(true)
// //  })
  console.log(to.name)
  // if(to.name == 'article'){
  //   next({name:'login'})
  // } 
  next()
  

  
})
router.beforeResolve((to, from) => {
  console.log("beforeResolve")
})

router.afterEach((to, from , fail)=>{
  console.log("afterEach")
  if(!fail){
    console.log('jiexichenggong')
  }
})

export default router;
export { path1 }
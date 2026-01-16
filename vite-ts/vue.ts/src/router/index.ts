

import { ref } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home.vue';
import Article from '../components/article.vue';
import ArticleFile from "../components/ArticleFile.vue";
import User from "../components/User.vue";
import UserInfo from "../components/UserInfo.vue";
import NotFound from '../components/not-found.vue';
import NavUser from "../components/nav-user.vue";
import Front from "../components/front.vue";
import Member from "../components/member.vue";
import Mobile from "../components/mobile.vue";
import Email from "../components/email.vue";
import MemberIndex from "../components/member-index.vue"

const path1 = ref(window.location.pathname);
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'nav-link-active',
  //  linkExactActiveClass: 'ex-active',
  routes: [
     {
          path: '/',
          component: Home,
          name: 'home',
          meta: { class: 'home' }
        },
    {
      path: '/front',
      component: Front,
      name: 'front',
      meta: { class: 'front', },
       alias: ['/m'],
      children: [
       
        {
          path: 'article',
          component: Article,
          name: 'article',
          meta: { class: 'article' }

        },
        {
          path: 'show/article-:id(.*)',
          component: ArticleFile,
          name: 'AritcleFile',
          meta: { class: 'article-file' }

        },
        {
          path: 'user',
          // components: {
          //   default: User,
          //   nav: NavUser
          // },
          component: User,
          name: 'userManger',
          meta: { class: 'user-manger' }

        },
        {
          path: 'user/:id(.*)',
          component: UserInfo,
          name: 'user',
          meta: { class: 'user-info' }

        }

      ]
    },
    {
      path: '/member',
      component: Member,
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
          component: Mobile
        },
        {
          path: 'email',
          name: 'email',
          component: Email
        }
      ]
    },
    {
      path: "/:any(.*)",
      component: NotFound,
      name: "notFound",
      meta: { class: 'not-found404' }
    }

  ]
})
export default router;
export { path1 }
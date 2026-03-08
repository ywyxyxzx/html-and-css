import { createRouter, createWebHistory,createWebHashHistory  } from 'vue-router'
const home = ()=> import('../views/home/HomeView.vue')
const category = ()=> import('../views/category/Category.vue')
const detail = ()=> import('../views/detail/Detail.vue')
const profile = ()=> import('../views/profile/Profile.vue')
const shopCart = ()=> import('../views/shopCart/ShopCart.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta: {
      title: '详情'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: shopCart,
    meta: {
      title: '购物车'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from, next)=>{
  next();
  document.title = to.meta.title;
})



export default router

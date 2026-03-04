import { createRouter, createWebHistory } from 'vue-router'
const home = ()=> import('../views/home/HomeView.vue')
const category = ()=> import('../views/category/Category.vue')
const detail = ()=> import('../views/detail/Detail.vue')
const profile = ()=> import('../views/profile/Profile.vue')
const shopCart = ()=> import('../views/shopCart/ShopCart.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: shopCart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

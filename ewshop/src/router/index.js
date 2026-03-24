import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { useStore } from 'vuex';
import { showToast, showSuccessToast } from 'vant';
import store from '../store';

const home = () => import('../views/home/HomeView.vue')
const category = () => import('../views/category/Category.vue')
const detail = () => import('../views/detail/Detail.vue')
const profile = () => import('../views/profile/Profile.vue')
const shopCart = () => import('../views/shopCart/ShopCart.vue')
const register = () => import('../views/profile/Register.vue')
const login = () => import('../views/profile/Login.vue')
const Address = () => import('../views/profile/Address.vue');
const AddressEdit = () => import('../views/profile/AddressEdit.vue');
const Order = () => import('../views/order/Order.vue');
const OrderDetail = () => import('../views/order/OrderDetail.vue');
const CreateOrder = () => import('../views/order/CreateOrder.vue');
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
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
      title: '分类',

    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: {
      title: '个人中心',
      isAuthRequired: true
    },

  },
   {
        path: '/address',
        name: 'address',
        component: Address,
        meta: {
          title: '图书兄弟-地址管理',
          isAuthRequired: true
        }
      },
      {
        path: '/addressedit',
        name: 'addressEdit',
        component: AddressEdit,
        meta: {
          title: '图书兄弟-编辑地址',
          isAuthRequired: true
        }
      },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      title: '图书兄弟-生成订单',
      isAuthRequired: true
    }
  },
  {
    path: '/createorder',
    name: 'createOrder',
    component: CreateOrder,
    meta: {
      title: '图书兄弟-订单预览',
      isAuthRequired: true
    }
  },
  {
    path: '/orderdetail',
    name: 'orderDetail',
    component: OrderDetail,
    meta: {
      title: '图书兄弟-订单详情',
      isAuthRequired: true
    }
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: shopCart,
    meta: {
      title: '购物车',
      isAuthRequired: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta['isAuthRequired'] && store.state.user.isLogin === false) {
    debugger
    showToast('请先登录')

    return next('/login')
  }
  next();

})



export default router

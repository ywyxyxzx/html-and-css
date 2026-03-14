import { createStore } from 'vuex'
import { getCart } from '@/network/cart';
const storeVuex = createStore({
  state: {
    user: {
      isLogin: !!window.localStorage.getItem('token')
    } ,
    cartCount: 0
      
  },
  getters: {
  },
  mutations: {
    setIsLogin(state, payload) {
        state.user.isLogin = payload;
    },
    addCart(state, count){
      state.cartCount=count
    }
  },
  actions: {
   updateCart(context, payload){
    return getCart().then(res=>{
      context.commit('addCart', res.data.length || 0)
    })
   }
  },
  modules: {
  }
})
export default storeVuex;
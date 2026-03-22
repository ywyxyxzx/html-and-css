import { createStore } from 'vuex'
import { getCart } from '@/network/cart';
const storeVuex = createStore({
  state: {
    user: {
      isLogin: !!window.localStorage.getItem('token'),
      info: {}
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
    },
    setUser(state, data){
      
      state.user.info=data
    }
  },
  actions: {
   updateCart(context, payload){
    return getCart().then(res=>{
      if(res){
        context.commit('addCart', res.data.length)
      }else {
        context.commit('addCart', 0)
      }
     
    })
   },
  updateUser(context, res){

      
      context.commit('setUser', res)

   }
  },    
  modules: {
  }
})
export default storeVuex;
import { createStore } from 'vuex'

const storeVuex = createStore({
  state: {
    user: {
      isLogin: !!window.localStorage.getItem('token')
    } 
      
  },
  getters: {
  },
  mutations: {
    setIsLogin(state, payload) {
      
        state.user.isLogin = payload;
    },
  },
  actions: {
    // setIsLogin(context, payload){
    //   context.commit('setIsLogin', )
    // }
  },
  modules: {
  }
})
export default storeVuex;
const state = ()=>({
    count:0
})


//接受用户的事件
const actions= {
  add(context, value) {
    context.commit('ADD', value);
  },
  reduce(context, value) {
    setTimeout(() => {
      context.commit('REDUCE', value);
    }, 1000);
  },
}
//操作state中的数据
const mutations={
  ADD(state, value) {
    debugger
    state.count += value;
  },
  REDUCE(state, value) {
      debugger
    state.count -= value;
  },
}



export default {
  namespaced: true,
  state,
    actions,
    mutations
}
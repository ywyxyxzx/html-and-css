<script setup>
import {ref, computed} from 'vue'
import {useStore,mapState, mapActions} from 'vuex';

const store = useStore()
const count = computed(()=>store.state.countVuex.count)
    // 累加
  const add = ()=> {
    debugger
    store.dispatch("countVuex/add",1 );        //同步操作
    // this.$store.dispatch("add", this.sum);   //异步操作
  }
// 累减
  const reduce = ()=> {
       debugger
    store.dispatch("countVuex/reduce", 1);      //同步操作
    // this.$store.dispatch("reduce", this.sum); //异步操作
  }
</script>
<template>
    <h1>当前的计数：{{ count  }}</h1>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
</template>
<style>

</style>
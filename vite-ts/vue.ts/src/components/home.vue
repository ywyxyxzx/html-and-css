<script setup  lang="ts">
import { onBeforeRouteLeave } from 'vue-router';
import searchBar from '../components/search-bar.vue';
import count from "../components/count.vue";
import countB from "../components/countB.vue";
import Nav from './nav.vue';
import {ref, provide} from 'vue';

onBeforeRouteLeave(async (to, from, next)=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            if(confirm('确定离开吗？')) {
                next()
            } else {
                next(false)
            }
            resolve(true)
        })
    })
    
    
})
const searchBarContent = ref('');
const countNum = ref(0);
const countAdd = ()=>{
    countNum.value ++;
}
provide('countNum', {countNum, countAdd});
const show1 = ref(true);
</script>
<template>
<Nav />
home
    <searchBar v-model="searchBarContent"></searchBar>
   {{ searchBarContent }}
   <button @click="show1=!show1">切换</button>
       <count v-if="!show1"/>
<KeepAlive>

    <countB  v-if="show1"/>
</KeepAlive>
</template>
<style scoped>


</style>
<script setup  lang="ts">
import { onBeforeRouteLeave } from 'vue-router';
import searchBar from '../components/search-bar.vue';
import Nav from './nav.vue';
import {ref} from 'vue';

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
</script>
<template>
<Nav />
home
    <searchBar v-model="searchBarContent"></searchBar>

   {{ searchBarContent }}
</template>
<style scoped>


</style>
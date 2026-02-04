<script setup  lang="ts">
import { onBeforeRouteLeave } from 'vue-router';
import Nav from './nav.vue';

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

</script>
<template>
<Nav />
home
    


</template>
<style scoped>


</style>
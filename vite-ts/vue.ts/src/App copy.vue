<script setup lang="ts">

//import routerView from './router-view.vue';

import Nav from './components/nav.vue';
</script>

<template>
  

    <suspense>
       <Nav class="navigation"/>
   <router-view name="nav">
    <template #default="{ Component }">
        <component :is="Component ?? Nav" />
    </template>
   </router-view>

   <div class="router-view">
    <router-view/>  
   </div>
 



    </suspense>
 
  
</template>

<style scoped lang="scss">

</style>

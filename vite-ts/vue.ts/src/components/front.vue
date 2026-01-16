<script setup lang="ts">
    
//import routerView from './router-view.vue';
import Nav from '../components/nav.vue';
</script>
<template>
  <!-- <router-view name="nav">
    <template #default="{ Component }">
        <component :is="Component ?? Nav" />
    </template>
   </router-view> -->
   <Nav></Nav>
    <suspense>
   <div class="router-view">
    <router-view name="default"/>  
   </div>
    </suspense>
 
</template>
<style scoped lang="scss">
</style>
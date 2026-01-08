<script setup lang="ts">

//import routerView from './router-view.vue';
</script>

<template>
  
    <div>
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/article">Article</router-link>
    </div>
    <suspense>
   <router-view />
    </suspense>
 
  
</template>

<style scoped></style>

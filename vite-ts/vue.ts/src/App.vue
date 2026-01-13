<script setup lang="ts">

//import routerView from './router-view.vue';
</script>

<template>
  
 
    <suspense>
   <router-view >
    <template #default="{ Component, route }" name="navigation">
      <div :class="route.meta?.class">
        <component :is="Component" />
      </div>
    </template>
   </router-view>
    </suspense>
 
  
</template>

<style scoped lang="scss">

</style>

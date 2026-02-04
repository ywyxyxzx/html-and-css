<script setup lang="ts">
import {computed } from 'vue'
import router from './router';
import {path1} from './router';
console.log(router)
let view = computed(() => {
   // @ts-ignore
    const route = router.routes.find(route1 => route1.path === path1.value);
    const c = route?.component
    return c;
})

console.log(view)
</script>
<template>
    <component :is="view"></component>
</template>
<style scoped></style>
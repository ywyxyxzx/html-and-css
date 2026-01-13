<script setup>
import { ref } from 'vue';
import {  getUserInfoById } from '../api';
import { useRoute } from 'vue-router';
const route = useRoute();
const routeId = route.params.id;
const userInfo = ref(await getUserInfoById(routeId));
</script>
<template>

    <p>{{ userInfo?.name }}</p>


</template>
<style scoped>

</style>
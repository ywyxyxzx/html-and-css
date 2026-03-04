<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
<Navbar>
    <template v-slot:default>
        {{route.meta.title}}
    </template>
</Navbar>
</template>
<style scoped>
</style>
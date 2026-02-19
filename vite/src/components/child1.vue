<script setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router'
const route = useRoute();
</script>
<template>
    {{ route.query.xd }}
    {{  route.query.hd }}

</template>
<style></style>
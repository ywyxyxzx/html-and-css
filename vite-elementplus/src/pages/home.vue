<script setup>
import { useUserStore } from '../store/user';
const user = useUserStore();
</script>

<template>
    <div>token: {{ user.token }}</div>


</template>

<style scope></style>
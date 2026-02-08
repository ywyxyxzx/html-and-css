

<script setup>
import { inject, onMounted } from 'vue';


    const {countNum,countAdd} = inject('countNum')
  
</script>

<template>
    <button @click="countAdd">加</button>
    {{ countNum }}
</template>

<style></style>
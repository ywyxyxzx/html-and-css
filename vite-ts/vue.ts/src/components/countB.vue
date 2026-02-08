

<script setup>
import {ref, inject, onMounted } from 'vue';



  const countNum = ref(0);
const countAdd = ()=>{
    countNum.value ++;
}
</script>

<template>
    AAAA
    <button @click="countAdd">加</button>
    {{ countNum }}
</template>

<style></style>
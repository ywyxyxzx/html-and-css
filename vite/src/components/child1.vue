<script setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router'
const route = useRoute();

import  {useCounterStore}  from '../store/counter.js';
  const counter = useCounterStore();
</script>
<template>
    1child
    <hr/>
<p>{{ counter.count }}</p>
<button @click="counter.increment()">++</button>
    <hr/>

    {{ route.query.xd }}


</template>
<style></style>
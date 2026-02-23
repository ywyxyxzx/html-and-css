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
<p>{{ counter.name }}</p>
<p>getters: {{ counter.doubleCount }}</p>
<button @click="counter.increment()">++</button>
<button @click="counter.$reset">reset</button>
<button @click="counter.$patch({count: 1, name: 'ere'})">modify</button>

    <hr/>

    {{ route.query.xd }}


</template>
<style></style>
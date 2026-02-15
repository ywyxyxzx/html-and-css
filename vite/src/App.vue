<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <router-link :to="{'name': 'one'}">1</router-link>
     <router-link :to="{'name': 'two'}">2</router-link>
      <router-link :to="{'name': 'three'}">3</router-link>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

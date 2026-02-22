<script setup>
  
</script>

<template>
  <div class="nav">
    <router-link :to="{name: 'one', query: {xd:'xd1111111'}}">111</router-link>
     <router-link :to="{name: 'two'}">222</router-link>
      <router-link :to="{name: 'three'}">333</router-link>
  </div>
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
.nav a{
  padding-right:10px;
}
.nav-link-active{
  color:orange
}
</style>

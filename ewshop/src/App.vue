<script setup>

</script>


<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

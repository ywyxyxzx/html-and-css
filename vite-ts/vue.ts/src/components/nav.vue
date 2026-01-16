<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.path)
</script>
<template>
     <div class="nav">
      <router-link :to="{name:'home'}" >home</router-link>
      <router-link :to="{name:'article'}" :class="{'nav-link-active':$route.path.includes('article')}">Article</router-link>
      <router-link :to="{name:'userManger'}">User</router-link>
      <router-link :to="{name:'mobile'}">Member</router-link>
    </div>
    <hr>
</template>
<style scoped lang="scss">
    
.nav {
  display:flex;
  flex-direction: row;
  background-color:white;
  padding: 10px;
  & a{
    background-color: #f1c40f;
    text-decoration: none;
    padding:5px 10px;
    color: #fff;
    margin-right:10px;
    &.nav-link-active{
      background-color: #2ecc71;
    }
    &.active{
      background-color: green
    }
  }
}

</style>
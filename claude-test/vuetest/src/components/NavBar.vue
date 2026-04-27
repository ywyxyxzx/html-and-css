<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">AI学习指南</router-link>
      <ul class="nav-links">
        <li><router-link to="/" :class="{ active: $route.path === '/' }">首页</router-link></li>
        <li><router-link to="/overview" :class="{ active: $route.path === '/overview' }">内容速览</router-link></li>
        <li><router-link to="/guide" :class="{ active: $route.path === '/guide' }">阅读指南</router-link></li>
        <li><router-link to="/quiz" :class="{ active: $route.path === '/quiz' }">适合度测评</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>
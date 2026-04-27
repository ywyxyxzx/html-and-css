<template>
  <div id="app">
    <NavBar />
    <main class="container">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2024 AI学习指南 | 让AI学习更简单</p>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
})
</script>
<script setup lang="ts">
    
import  {ref} from 'vue';
import * as api from "../api";
import ArticleItem from '../components/article-item.vue';   
const articles = ref(await api.getAllArticles());

</script>
<template>
    <ArticleItem :article="article" v-for="article in articles" class="article-item"></ArticleItem>
</template>
<style scoped>

</style>
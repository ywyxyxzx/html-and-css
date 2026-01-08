<script setup lang="ts">
import  {ref} from 'vue';
import * as api from "../api";
import ArticleItem from './article-item.vue';
const articles = ref(await api.getAllArticles());
</script>
<template>
    home
<hr>
<div v-for="article in articles" >
    <ArticleItem :article="article"></ArticleItem>
</div>

</template>
<style scoped></style>
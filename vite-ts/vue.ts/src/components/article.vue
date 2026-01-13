<script setup lang="ts">
    
import  {ref} from 'vue';
import * as api from "../api";
import ArticleList from '../components/article-list.vue';   
import Nav from './nav.vue';

</script>
<template>
    <Nav></Nav>
    <div class="article-wrap">
        <ArticleList></ArticleList>
    </div>

</template>
<style scoped>
.article-wrap{
    display:flex;
    flex-direction: column;
    width: 100%;
    padding:10px;
    background:white
}

</style>
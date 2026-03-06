<script setup lang="ts">
    
import {ref, onBeforeUpdate, onUpdated} from "vue";
import ArticleList from '../components/article-list.vue';   
const listshow = ref(true);
const blockshow = ref(true);
const initNum = ref(0);

onBeforeUpdate(()=>{
   // 
})
onUpdated(()=>{
   // 
})
</script>
<template>
    <div class="article-wrap">
        <button @click="listshow=!listshow">list show</button>
        <hr>
        <ArticleList v-if="listshow"></ArticleList>
         <hr>
        <button @click="blockshow=!blockshow">duan show</button>
          <hr>
          <p  v-if="blockshow">12312312312313123</p>

          <hr>
        <button @click="initNum++">duan show</button>
            <hr>
            {{ initNum }}
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
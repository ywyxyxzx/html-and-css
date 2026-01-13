<script setup>
import ArticleList from '../components/article-list.vue';
import { ref } from 'vue';
import { getArticleById } from '../api';
import { useRoute } from 'vue-router';

import { watch } from 'vue';
const route = useRoute();

const articleObj = ref();
const getContent = async () => {
    const routeId = route.params.id;
   articleObj.value = await getArticleById(routeId);
}


watch(route, async () => {
    debugger
     getContent ()
})

 getContent ()
watch(articleObj, async () => {
    debugger
   console.log( articleObj.value)
})
</script>
<template>
    <div class="main">
        <div class="left-main">
            <h1>{{ articleObj?.title }}</h1>
            <hr>
            <p>{{ articleObj?.content }}</p>
        </div>
        <div class="right-articles">
            <h6>List</h6>
            <ArticleList />
        </div>
    </div>


</template>
<style scoped lang="scss">
.main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    flex-direction: row;

    & .left-main {
        margin-right: auto;
        border: 1px solid #ccc;
        background: white;
        padding: 10px;

        & p {
            text-indent: 2em;
        }

    }

    & .right-articles {
        min-width: 300px;
        width: 35%;
        border: 1px solid #ccc;
        margin-left: 10px;
        padding: 10px;
        background: white;


        & :deep .article-item {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>
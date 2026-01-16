<script setup lang="ts">
import  {ref} from 'vue';
import * as api from "../api";
import UserItem from './user-item.vue';
import Nav from './nav.vue';
const userList = ref(await api.getUserList());

</script>
<template>


    
    <div class="article-wrap">
        <UserItem  v-for="userInfo in  userList" :userInfo="userInfo" class="article-item"></UserItem>
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
<script setup>
import { useUserStore } from '../store/user'
import {
  Search,
} from '@element-plus/icons-vue'
import Header from "@/components/header.vue"


const user = useUserStore();
</script>

<template>
  <Header/>
    <div class="text-xs text-red-500">token: {{ user.token }}</div>
    <el-button type="primary" >3123</el-button>
    <el-button type="primary" :icon="Search" circle/>
</template>

<style scope></style>
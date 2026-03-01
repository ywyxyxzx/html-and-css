<script setup>
import { useUserStore } from '../store/user'
import {
  Search,
} from '@element-plus/icons-vue'
import Header from "@/components/Header.vue"

</script>

<template>
  
    <!-- <div class="text-xs text-red-500">token: {{ user.token }}</div>
    <el-button type="primary" >3123</el-button>
    <el-button type="primary" :icon="Search" circle/> -->
  <!-- <Header/> -->
  <div clas="w-[100%] w-full">
    <img src="https://file.xdclass.net/video/2023/banner/618/QD.gif" alt="header-img" class="w-full h-full"/>
    <!-- nav -->
    <div class="w-[1200px] mx-auto items-center shadow mb-[10px]">

      <Header></Header>
    </div>
    <!-- main -->
    <div class="w-[1200px] mx-auto mt-4 mb-4">
      <div class="flex item-center justify-between">
           <!-- {/* 分类导航 */} -->
        <!-- {/* 轮播图 */} -->
        <!-- {/* 新人福利 */} -->
      </div>
      <!-- {/* 高单价导航 */} -->
      <!-- {/* 课程分类列表 */} -->
    </div>
    <!-- {/* 提醒登录浮层组件 */} -->
  </div>



</template>

<style scope></style>
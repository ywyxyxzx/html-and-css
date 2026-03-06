<script setup>
import { onMounted ,ref} from 'vue'
import {signUpModalStore} from '@/store/modal.js';
import Register from '@/components/Register.vue';
import { useUserStore } from "@/store/user.js";
import Login from '../components/Login.vue';
  const modal = signUpModalStore();


    const searchbutton = ref(null)
    const searchText=()=>{
        
        alert(1313)
    }
    const input = ref("")

    const user = useUserStore();

    
</script>

<template>
    <div class="w-full flex items-center gap-2">
        <img
        class="h-16 w-36"
        src="https://front.cdn.xdclass.net/images/logo.webp"
        />

        <div class="flex items-center justify-between flex-[1]">
      <a href="#">首页</a>
      <a href="#">课程中心</a>
      <a href="#" class="flex items-center justify-center">
        <img
          src="https://front.cdn.xdclass.net/images/vip_icon.webp"
          class="w-5 h-5"
        />
        <span>超级会员</span>
      </a>
      <a href="#">工具</a>
      <a href="#">
        <span>自学路线</span>
        <el-icon>
          <ArrowDownBold />
        </el-icon>
      </a>
      <a href="#">
        <span>一对一辅导</span>
        <el-icon>
          <ArrowDownBold />
        </el-icon>
      </a>
      <a href="#">
        <el-input v-model="input" class="w-60 search-bar" placeholder="请输入搜索内容">
          <template #append >
            <div class="search-button" @click="searchText">
                 <!-- <el-button :icon="Search" /> -->
            <el-icon >
              <Search />
            </el-icon>
            </div>
           
          </template>
        </el-input>
      </a>
      <a href="#">兑换码</a>
      <a href="#">云服务器</a>
       <div class="mr-2" v-show="!user.isLogin">
        <el-button link size="large" @click="modal.switchLoginVisible">登录</el-button>
        <el-button link size="large" @click="modal.switchRegVisible" >注册</el-button>
      </div>
      <div class="mr-2" v-show="user.isLogin">
       
          <el-popconfirm title="是否退出登录?" @confirm="user.logout">
            <template #reference>
              <el-button> {{user.users.account}}</el-button>
            </template>
          </el-popconfirm>
      </div>
    </div>
    
  </div>

  <Register/>
  <Login/>
</template>

<style scope>
    
</style>
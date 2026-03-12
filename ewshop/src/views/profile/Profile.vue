<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute, useRouter } from 'vue-router';
import { logout, getUser} from 'network/user.js'
import { showToast, showSuccessToast } from 'vant';
import {useStore} from 'vuex';
const route = useRoute();
const router = useRouter()
const store = useStore()
const tologout = ()=>{
    logout().then(res=>{
        
        if(res && res.status == '204') {
            showSuccessToast("退出成功");
            window.localStorage.removeItem('token', '');
            store.commit('setIsLogin', false);

            setTimeout(()=>{
                router.push({path:'/login'});
            }, 500);
        }
    }).catch();
}
</script>

<template>
<Navbar>
    <template v-slot:default>
        {{route.meta.title}}
    </template>
</Navbar>


<div style="margin: 16px;">
    <van-button round block  color="#42b983" @click="tologout">退出登录</van-button>
</div>
</template>

<style scoped>
</style>
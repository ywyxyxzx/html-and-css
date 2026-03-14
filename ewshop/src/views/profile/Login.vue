<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { showNotify, closeNotify } from 'vant';
import { showToast, showSuccessToast } from 'vant';
import {login } from 'network/user.js';
import {useStore} from 'vuex';

const route = useRoute();
const router = useRouter()
const store = useStore()
const userinfo = reactive({
    email: '',
    password: '',
})
const {email , password}  = toRefs(userinfo)
const onSubmit = () => {
   
    login(userinfo).then(res => {
        if(!res){
            return
        }
        // ywyxyx@lmonkey.com use123
        //eduwork2@lmonkey.com   use123
        console.log(res.access_token);
        //将token保存在本地 window.localStorage   setItem(key, value) getItem(key)
        window.localStorage.setItem('token', res.access_token);
       // 在vuex isLogin
       debugger
        store.commit('setIsLogin', true);

        showSuccessToast('登录成功');

        userinfo.email = '';
        userinfo.password = '';

        setTimeout(() => {
            router.go(-1);
        }, 500)

    })
}


</script>

<template>
    <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>
    <div style="text-align:center">
        <img src="../../assets/images/study.jpg" class="mx-auto w-[60%]" />
    </div>
    <van-form @submit="onSubmit">
        <van-field v-model="email" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />

        <div style="margin: 16px;">
            <div class="link-login" @click="$router.push({ path: '/register' })">
                没有账号，立即注册
            </div>
            <van-button round block type="info" color="#44b883" native-type="submit">提交</van-button>
        </div>
    </van-form>
</template>

<style scoped lang="scss">
.link-login {
    font-size: 14px;
    margin-bottom: 20px;
    color: #42b983;
    display: inline-block;
    text-align: left;
    float: left;
}
</style>



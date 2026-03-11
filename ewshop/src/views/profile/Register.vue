<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { ref, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { showNotify, closeNotify } from 'vant';
import { showToast, showSuccessToast } from 'vant';
import { register } from 'network/user.js';

const route = useRoute();
const router = useRouter()
//data
const userInfo = reactive({
    name: '',
    password: '',
    password_confirmation: '',
    email: ''
})
const { name, password, password_confirmation, email } = toRefs(userInfo)
//methods
const onSubmit = () => {
    if (userInfo.password != userInfo.password_confirmation) {
        showNotify({ message: '两次密码不一致...' });
    } else {
        register(userInfo).then(res => {
            console.log(999, res)
            if (!res) {
                return
            }
            if (res.hasOwnProperty('status') && res.status == '201') {
                showSuccessToast('注册成功');

                setTimeout(()=>{
                    router.push({path:'/login'});
                },1000)
            
            }

            userInfo.password_confirmation = '';
            userInfo.password = '';
        })
    }
}
</script>

<template>
    <Navbar>
        <template v-slot:default>
            {{ route.meta.title }}
        </template>
    </Navbar>

    <div style="margin-top: 50px">
        <div style="text-align:center">
            <!-- <van-image
                        width="10rem"
                        height="5rem"
                        fit="contain"
                        src="../../assets/images/study.jpg"
                /> -->
            <img src="../../assets/images/study.jpg" class="mx-auto w-[60%]" />
        </div>
        <van-form @submit="onSubmit">
            <van-field v-model="name" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />

            <van-field v-model="password_confirmation" type="password" name="确认密码" label="确认密码" placeholder="确认密码"
                :rules="[{ required: true, message: '请填写一致密码' }]" />

            <van-field v-model="email" name="电子邮箱" label="电子邮箱" placeholder="请输入正确电子邮箱格式"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <div style="margin: 16px;">
                <div class="link-login" @click="$router.push({ path: '/login' })">
                    已有账号，立即登录
                </div>
                <van-button round block type="info" color="#44b883" native-type="submit">提交</van-button>
            </div>
        </van-form>

    </div>


</template>

<style scoped lang="scss">
.link-login {
    font-size:14px;
    margin-bottom: 20px;
    color:#42b983;
    display: inline-block;
    text-align: left;
    float:left;
}
</style>
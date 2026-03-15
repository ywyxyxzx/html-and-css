<script setup>
import Navbar from 'components/common/navbar/navbar.vue';
import { useRoute, useRouter } from 'vue-router';
import { logout, getUser } from 'network/user.js'
import { showToast, showSuccessToast } from 'vant';
import { useStore } from 'vuex';
import { onMounted , computed , inject} from 'vue';
const route = useRoute();
const router = useRouter()
const store = useStore()
// const user = computed(()=>{
//     return store.state.user.info
// })
const user = inject('user')
console.log(123123, store.state.user, store.state.user.info)
const tologout = () => {
    logout().then(res => {

        if (res && res.status == '204') {
            showSuccessToast("退出成功");
            window.localStorage.removeItem('token', '');
            store.commit('setIsLogin', false);

            setTimeout(() => {
                router.push({ path: '/login' });
            }, 500);
        }
    }).catch();
}
 // 跳转方法
const goTo = (path, query) => {
    router.push({path, query:query || {}});
}
onMounted(() => {
   
})
</script>


<template>
    <div id="box">
        <Navbar>
            <template v-slot:default>
                {{ route.meta.title }}
            </template>



        </Navbar>


        <div class="user-box">
            <div class="user-info">
                <div class="info">
                    <img src="~assets/images/user.png" />
                    <div class="user-desc">
                        <span>昵称：{{ user?.name }}</span>
                        <span>登录名：{{ user?.email }}</span>
                        <span class="name">个性签名：成就自己的只需一套精品</span>
                    </div>
                </div>
            </div>

            <ul class="user-list">
                <li class="van-hairline--bottom" @click="goTo('/collect')">
                    <span>我的收藏</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline--bottom" @click="goTo('/order')">
                    <span>我的订单</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline--bottom" @click="goTo('/setting')">
                    <span>账号管理</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline--bottom" @click="goTo('/address')">
                    <span>地址管理</span>
                    <van-icon name="arrow" />
                </li>
                <li class="van-hairline--bottom" @click="goTo('/about')">
                    <span>关于我们</span>
                    <van-icon name="arrow" />
                </li>
            </ul>
        </div>

        <div style="margin: 16px;">
            <van-button round block color="#42b983" @click="tologout">退出登录</van-button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#box {
    background: #FCFCFC;
    height: 100vh;
}

.user-box {
    margin-top: 5px;

    .user-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 44px;
        line-height: 44px;
        padding: 0 10px;
        color: #252525;
        background: #fff;
        border-bottom: 1px solid #dcdcdc;

        .user-name {
            font-size: 14px;
        }
    }

    .user-info {
        width: 94%;
        margin: 5px auto;
        height: 115px;
        background: linear-gradient(90deg, #31c7A7, #A1c7c7);
        box-shadow: 0 2px 5px #269090;
        border-radius: 6px;
        margin-top:10px;
        text-align: left;

        .info {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            padding: 25px 20px;

            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-top: 4px;
            }

            .user-desc {
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                line-height: 20px;
                font-size: 14px;
                color: #fff;

                span {
                    color: #fff;
                    font-size: 14px;
                    padding: 2px 0;
                }
            }

            .account-setting {
                position: absolute;
                top: 10px;
                right: 20px;
                font-size: 13px;
                color: #fff;

                .van-icon-setting-o {
                    font-size: 16px;
                    vertical-align: -3px;
                    margin-right: 4px;
                }
            }
        }
    }

    .user-list {

        padding: 0 8px;
        margin-top: 10px;

        li {
            padding-left: 5px;
            padding-right: 5px;
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;

            .van-icon-arrow {
                margin-top: 13px;
            }

            margin:20px 0 !important;
            background: #FFFFFF;
            border-radius: 3px;
        }
    }
}
</style>
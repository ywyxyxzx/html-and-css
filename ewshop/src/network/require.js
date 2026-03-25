import axios from 'axios';

import { showToast, showSuccessToast, showFailToast } from 'vant';
import router from '@/router/index.js'
export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000


    })

    // 请求拦截 token
    // no-unused-vars
    instance.interceptors.request.use(config => {
        // 认证
        const token = window.localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config
    }, err => {

    })


    // 响应拦截
    instance.interceptors.response.use(res => {
        // 认证

        console.log('response:', res)
        return res.data ? res.data : res
    }, err => {
        debugger

        // 如果有需要授权才可以访问的接口， 统一去login授权
        if ((err.response['status'] && err.response['status'] == '401')) {
            showFailToast('请先登录');
            router.push({ path: '/login' });
            return
        }
        const errData = err.response.data
        // 如果有错误，这里面会去处理，显示错误信
        showFailToast(errData.errors[Object.keys(errData.errors)[0]][0])
         // ✨ 关键修复：必须返回 Promise.reject，否则外部调用者会进入 .then()
        return Promise.reject(err);
    })
    return instance(config);
}

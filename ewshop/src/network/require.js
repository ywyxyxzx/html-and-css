import axios from 'axios';
export default function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000


    })

    // 请求拦截 token
    // no-unused-vars
    instance.interceptors.request.use( config=>{
        // 认证

        return config
    },  err=>{

    })


    // 响应拦截
       instance.interceptors.response.use( res=>{
        // 认证
        debugger
        console.log(res)
        return res.data? res.data: res
    },  err=>{

    })
     return instance(config);
}

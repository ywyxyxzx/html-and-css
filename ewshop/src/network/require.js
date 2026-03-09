import axios from 'axios';
export function request(config) {
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
      
        console.log('response:',res)
        return res.data? res.data: res
    },  err=>{
        debugger
    })
     return instance(config);
}

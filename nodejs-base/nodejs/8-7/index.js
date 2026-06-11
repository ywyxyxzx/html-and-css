const express = require('express')
//创建服务器
const app = express()
const user = require('./route/user')
const blog = require('./route/blog')

//将路由对象与请求地址匹配
app.use('/user',user)
app.use('/blog',blog)

//监听端口
app.listen(3000)
console.log('服务器已经启动')
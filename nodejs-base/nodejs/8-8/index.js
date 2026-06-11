const express = require('express')
const path = require('path')
//创建服务器
const app = express()

app.use(express.static(path.join(__dirname,'public')))


//监听端口
app.listen(3000)
console.log('服务器已经启动')
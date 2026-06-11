const express = require('express')

//创建服务器
const app = express()

app.get('/',(req,res)=>{
  res.send('hello express')
})

//监听端口
app.listen(3000)
console.log('服务器已经启动')
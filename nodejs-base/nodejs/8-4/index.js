const express = require('express')
const bodyParser = require('body-parser')

//创建服务器
const app = express()

//拦截所有请求
app.use((req,res,next)=>{
  console.log('这是第一个中间件')
  next()
})

//匹配所有/index的请求，无论是get或者post
app.use('/index',(req,res,next)=>{
  console.log('这是第二个中间件')
  next()
})

//一个http请求可以有多个中间件
app.get('/index', (req, res, next) => {
  req.name = 'eric'
  next()
})

app.get('/index', (req, res) => {
  res.send(req.name)
})

//监听端口
app.listen(3000)
console.log('服务器已经启动')
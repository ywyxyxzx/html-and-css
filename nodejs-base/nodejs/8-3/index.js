const express = require('express')
const bodyParser = require('body-parser')

//创建服务器
const app = express()

//拦截所有请求
//extended为false表示用querystring解析字符串参数
//extended为true表示用qs解析字符串参数
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

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
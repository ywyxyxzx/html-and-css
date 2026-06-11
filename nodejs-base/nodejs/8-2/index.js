const express = require('express')
const bodyParser = require('body-parser')

//创建服务器
const app = express()

//拦截所有请求
//extended为false表示用querystring解析字符串参数
//extended为true表示用qs解析字符串参数
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/index', (req, res, next) => {
  res.send(req.query)
})

app.post('/add', (req, res) => {
  res.send(req.body)
})

//监听端口
app.listen(3000)
console.log('服务器已经启动')
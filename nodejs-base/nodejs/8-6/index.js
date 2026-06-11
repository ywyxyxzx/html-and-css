const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

//创建服务器
const app = express()

app.get('/index', (req, res, next) => {
  fs.readFile('./index.js', 'utf8', (err, result) => {
    if (err) {
      next(err)
      return;
    } else {
      res.send(result)
    }
  })
})

//错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

//自定义404
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND')
})

//监听端口
app.listen(3000)
console.log('服务器已经启动')
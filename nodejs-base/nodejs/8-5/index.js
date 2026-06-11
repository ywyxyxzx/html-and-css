const express = require('express')
const bodyParser = require('body-parser')

//创建服务器
const app = express()

// //网站维护
// app.use((req,res,next)=>{
//   res.send('网站正在维护中')
// })

//登录拦截
app.use((req,res,next)=>{
  let isLogin = true
  if(isLogin){
    next()
  }else{
    res.send('你需要登录后才可访问')
  }
})

app.get('/index', (req, res) => {
  res.send('登录了')
})

//自定义404
app.use((req,res)=>{
  res.status(404).send('404 NOT FOUND')
})

//监听端口
app.listen(3000)
console.log('服务器已经启动')
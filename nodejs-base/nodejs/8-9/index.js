const express = require('express')
const path = require('path')

//创建服务器
const app = express()

//使用express-art-template渲染后缀为art的模板
app.engine('art',require('express-art-template'))
//设置模板的存放目录
app.set('views',path.join(__dirname,'views'))
//渲染模板时默认拼接art后缀
app.set('view engine','art')

app.get('/index',(req,res)=>{
  res.render('index',{
    msg:'访问首页'
  })
})

//监听端口
app.listen(3000)
console.log('服务器已经启动')
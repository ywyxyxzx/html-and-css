const express = require('express')
//创建用户路由对象
const user = express.Router()

//创建二级路由
user.get('/list',(req,res)=>{
  res.send('访问用户列表')
})
user.get('/index',(req,res)=>{
  res.send('访问用户首页')
})

module.exports = user
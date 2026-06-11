const express = require('express')
//创建博客路由对象
const blog = express.Router()

//创建二级路由
blog.get('/index',(req,res)=>{
  res.send('访问博客首页')
})

module.exports = blog
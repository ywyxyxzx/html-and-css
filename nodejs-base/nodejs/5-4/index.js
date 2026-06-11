const mysql = require('mysql')

//创建连接
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456789',
  port:'3306',
  database:'user_test'
})

//建立连接
conn.connect()


let sql = 'select * from user where name = ? and city = ?'

//执行sql语句
conn.query(sql,['eric1','广州'],(err,result)=>{
  if(err) throw err
  console.log(result)
})

//关闭连接
conn.end()
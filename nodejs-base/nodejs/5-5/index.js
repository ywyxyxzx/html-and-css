const mysql = require('mysql')

//创建连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456789',
  port: '3306',
  database: 'user_test'
})

//获取连接
pool.getConnection((err, conn) => {
  if (err) throw err
  let sql = 'select * from user where city = ?'

  //执行sql语句
  conn.query(sql, ['广州'], (err, result) => {
    conn.release()
    if (err) throw err
    console.log(result)
  })
})

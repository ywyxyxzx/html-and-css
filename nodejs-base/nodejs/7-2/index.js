// process.env.NODE_ENV = 'dev'
const http = require('http')
console.log(process.env.NODE_ENV)

// const server = http.createServer()

// server.listen(3000,()=>{
//   console.log('启动服务器')
// })
// process.on('uncaughtException',(err)=>{
//   console.log('捕获异常 '+ err)
// })

// try {
//   console.log(a)
// }catch(e){
//   console.log("catch异常 " + e)
// }

// console.log(process.pid)
// console.log(process.platform)

// process.title = "node教程"

// process.on('exit', (code) => {
//   console.log(`退出码: ${code}`);
// });

// console.log(process.cwd())


let sum;
for(let i = 0;i<1e10;i++){
  sum += i
}
console.log(process.uptime())

process.title = '计算'

let sum = 0;
for(let i = 0;i<1e10;i++){
  sum += i
}

console.log(sum)

console.error('出错')

process.on('message',(data)=>{
  console.log('接收父进程的消息:'+data)
})

process.send(sum)
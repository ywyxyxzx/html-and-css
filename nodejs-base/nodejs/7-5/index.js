const http = require('http')
const { spawn, exec, execFile, fork } = require('child_process')

const server = http.createServer((req, res) => {
  if (req.url == '/compute') {
    const work = fork('work.js')
    work.send('发送给子进程的信息')
    work.on('message', data => {
      console.log('父进程接收子进程的消息：' + data)
    })
  } else {
    res.end('ok')
  }
})

server.listen(3000, () => {
  console.log('listen sucess')
})
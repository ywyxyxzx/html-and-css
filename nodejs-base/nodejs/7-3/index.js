const http = require('http')
const {spawn,exec,execFile,fork} = require('child_process')

const server = http.createServer((req,res)=>{
  if(req.url== '/compute'){
    // const work = spawn('node',['work.js'])
    // work.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });
    // exec('node work.js',(err,stdout,stderr)=>{
    //   if(err) throw err
    //   console.log(stdout)
    // })
    // execFile('node',['work.js'],(err,stdout,stderr)=>{
    //   if(err) throw err
    //   console.log(stdout)
    //   console.log(stderr)
    // })
    fork('work.js')
  }else{
    res.end('ok')
  }
})

server.listen(3000,()=>{
  console.log('listen sucess')
})
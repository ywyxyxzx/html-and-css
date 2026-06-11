const fs = require('fs');

// fs.readFile('./hello.txt','utf8',(err,data) => {
//   if(err) throw err;
//   console.log(data); 
// })


// fs.writeFile('./hello.txt','this is a test',err => {
//   if(err) throw err;
//   console.log('写入成功');
// })

// const buf = Buffer.from('hello world!')
// fs.appendFile('./hello.txt',buf,(err) => {
//   if(err) throw err;
//   console.log('追加成功');
// })

// fs.stat('./hello.txtt',(err,stats) => {
//   if(err){
//     console.log('文件不存在'); 
//     return;
//   }
//   console.log(stats);
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
// })


// fs.rename('./hello.txt','./test.txt',err => {
//   if(err) throw err;
//   console.log('重命名成功');
// })

fs.unlink('./test.txt',err => {
  if(err) throw err;
  console.log('删除成功');
})
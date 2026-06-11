const fs =require('fs');
const chokidar =require('chokidar');

// fs.mkdir('./a',err => {
//   if(err) throw err;
//   console.log('创建文件夹成功');
// })

// fs.mkdir('./b/c',{
//   recursive:true
// },err => {
//   if(err) throw err;
//   console.log('创建文件夹成功');
// })

// fs.readdir('./',{
//   encoding:'buffer',
//   withFileTypes:true
// },(err,files) => {
//   if(err) throw err;
//   console.log(files)
// })

// fs.rmdir('./b',{
//   recursive:true
// },err => {
//   if(err) throw err;
//   console.log('删除文件夹成功');
// })

// fs.watch('./',{
//   recursive:true
// },(eventType,filename) => {
//   console.log(eventType,filename)
// })


chokidar.watch('./',{
  ignored:'./node_modules'
}).on('all',(event,path) => {
  console.log(event,path)
})
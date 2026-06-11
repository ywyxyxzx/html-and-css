const fs = require('fs');


// let rs = fs.createReadStream('./streamTest.js',{
//   highWaterMark:100
// });

// let count = 1;
// rs.on('data',chunk => {
//   console.log(chunk.toString())
//   console.log(count++)
// })

// rs.on('end',()=>{
//   console.log('读取完成')
// });

// let ws = fs.createWriteStream('./a.txt');

// let num = 1;
// let timer = setInterval(() => {
//   if(num < 10){
//     ws.write(num + '')
//     num++
//   }else{
//     ws.end("写入完成");
//     clearInterval(timer)
//   }
// }, 200);


// ws.on('finish',()=>{
//   console.log('写入完成')
// })


let rs = fs.createReadStream('./streamTest.js');
let ws = fs.createWriteStream('./a.txt');

rs.pipe(ws)
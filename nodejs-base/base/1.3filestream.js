let fs = require('fs');

// let readStream = fs.createReadStream('./hello.md', {
//     encoding: 'utf8',
//     highWaterMark: 100, // 每次读取的字节数，默认 64KB
//     flags: 'r' // 文件打开模式，默认 'r'（只读）
// });
// let count = 0;
// readStream.on('data', (chunk) => {
//     console.log('读取到数据块:', chunk);
//     console.log('数据块大小:', chunk.length);
//     count++;
// });

// readStream.on('end', () => {
//     console.log('文件读取完成');
// });



// let writeStream = fs.createWriteStream('./output.txt', {
//     encoding: 'utf8',
//     highWaterMark: 100, // 每次写入的字节数，默认 16KB
//     flags: 'a' // 文件打开模式，默认 'w'（写入）
// });
// let num = 1;
// let interval = setInterval(() => {
//     if(num<100){
//         writeStream.write(`这是第${num}行数据\n`, (err) => {
//             if (err) {
//                 console.error('写入错误:', err);
//             } else {
//                 console.log(`成功写入第${num}行数据`);
//             }
//         });
//         num++;
//     }else{
//         clearInterval(interval);    
//         writeStream.end(() => {
//             console.log('写入完成');
//         });
//     }
// });

let readStream = fs.createReadStream('./hello.md')
let writeStream = fs.createWriteStream('./output.txt')
readStream.pipe(writeStream)
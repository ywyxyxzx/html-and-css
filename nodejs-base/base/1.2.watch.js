const fs = require('fs');
const chokidar = require('chokidar');
// fs.watch('./',{
//     recursive: true
// }, (eventType, filename) => {
//     console.log(`事件类型: ${eventType}`, `文件名: ${filename}`);          
// })

chokidar.watch('./',{
 ignored:'./node_modules',
  persistent: true,           // 保持进程存活（默认 true）
  ignoreInitial: true,       // 忽略初始化时触发的 add 事件
}).on('all',(event,path) => {
 console.log(event,path)
})
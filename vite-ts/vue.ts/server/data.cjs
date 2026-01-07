
var Mock = require('mockjs');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 var data = {news: []}

  for(let i=0;i<20;i++){
    data.news.push({
      id: i,
      title: Mock.Random.cword(10,20), // Random.cword( min, max )
      content: Mock.Random.cparagraph(10)
    })
  }
 let  aa= Mock.mock(data);
 console.log(aa)
   // console.log(JSON.stringify(data))
module.exports = function () {
 
 

//   fs.writeFile('./data1.json', aa, 'utf8', (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('文件写入成功！');
//     }
//      rl.close();
//   });
  
 }
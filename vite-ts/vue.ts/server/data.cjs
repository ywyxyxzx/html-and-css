
var Mock = require('mockjs');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 var data = {article: [], user: []}

  for(let i=0;i<10;i++){
    // data.article.push({
    //   id: i,
    //   title: Mock.Random.cword(10,20), // Random.cword( min, max )
    //   content: Mock.Random.cparagraph(10)
    // })
    data.user.push({
      id: i,
      name: Mock.Random.word(3), // Random.cname() 随机生成一个常见的中文姓名
    })
  }
 let  aa= Mock.mock(data);
 console.log(JSON.stringify(aa))
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
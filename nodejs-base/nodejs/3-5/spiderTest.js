const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio')

https.get('https://xdclass.net/#/index',(res)=>{
  res.setEncoding('utf8');
  let html = '';
  res.on('data',chunk => {
    html += chunk;
  })
  res.on('end',()=>{
    // console.log(html)
    const $ = cheerio.load(html);
    console.log($('title').text());
    fs.writeFile('./index.txt',html,(err) => {
      if(err) throw err;
      console.log('写入成功')
    })
  })
})
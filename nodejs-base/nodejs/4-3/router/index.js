const url = require('url')
function handleRequest(req,res) {
  let urlObj = url.parse(req.url,true);
  console.log(urlObj)
  if(urlObj.pathname === '/api/getMsg'&&req.method === 'GET'){
    return {
      msg:'获取成功'
    }
  }
  if(urlObj.pathname === '/api/updateData'&&req.method === 'POST'){
    return {
      msg:'更新成功'
    }
  }
}

module.exports = handleRequest
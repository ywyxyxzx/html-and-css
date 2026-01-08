const host = "http://127.0.0.1:3002/article";
const getAllArticles =  async()=>{
    return await fetch(host).then(res=>res.json())
}
export {
    getAllArticles
}
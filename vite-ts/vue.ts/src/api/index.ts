const arthost = "http://127.0.0.1:3002/article";
const userHost = "http://127.0.0.1:3002/user";
const getAllArticles =  async()=>{
    return await fetch(arthost).then(res=>res.json())
}
const getArticleById = async(id:string)=>{
    return await fetch(arthost+`/${id}`).then(res=>res.json())
}
const getUserList = async()=>{
    return await fetch(userHost).then(res=>res.json())
}
const getUserInfoById = async(id:string)=>{
    return await fetch(userHost+`/${id}`).then(res=>res.json())
}
export {
    getAllArticles,
    getArticleById,
    getUserList,
    getUserInfoById
}
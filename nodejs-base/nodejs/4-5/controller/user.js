module.exports = {
  getUserList(){
    return [
      {
        id:1,
        name:'eric',
        city:'北京'
      },
      {
        id:2,
        name:'xiaoming',
        city:'广州'
      },
      {
        id:3,
        name:'小红',
        city:'上海'
      }
    ]
  },
  addUser(userObj){
    console.log(userObj);
    return {
      code:0,
      msg:'新增成功',
      data:null
    }
  },
  delectUser(id){
    console.log(id)
    return {
      code:0,
      msg:'删除成功',
      data:null
    }
  },
  updateUser(id,userObj){
    console.log(id,userObj);
    return {
      code:0,
      msg:'更新成功',
      data:null
    }
  }
}
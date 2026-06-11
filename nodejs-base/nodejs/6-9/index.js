const mongoose = require('mongoose')
const schema = mongoose.Schema

mongoose.set('useFindAndModify',false)

//连接数据库
mongoose.connect('mongodb://localhost/test',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log('连接数据库成功')
}).catch(err => {
  console.log(err,'连接数据库失败')
})

//创建集合结构
const userSchema = new schema({
  // name:{
  //   type:String,
  //   required:[true,'该字段为必选字段'],
  //   minlength:[2,'输入值长度小于最小长度'],
  //   maxlength:[6,'输入值长度大于最大长度'],
  //   trim:true
  // },
  // age:{
  //   type:Number,
  //   min:18,
  //   max:30
  // },
  // createTime:{
  //   type:Date,
  //   default:Date.now
  // },
  hobbies:{
    type:String,
    enum:{
      values:['唱','跳','Rap'],
      message:'该值不在设定的值当中'
    }
  },
  score:{
    type:Number,
    validate:{
      validator:v => {
        //返回布尔值
        return v&&v>0&&v<100
      },
      message:'不是有效的分数'
    }
  }
})

//创建集合
const Model = mongoose.model('user',userSchema)

Model.create({hobbies:'篮球',score:-1})
  .then(res => console.log(res))
  .catch(error => {
    const errs = error.errors

    for(var i in errs){
      console.log(errs[i].message)
    }
  })
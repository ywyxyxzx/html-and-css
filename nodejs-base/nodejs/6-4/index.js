const mongoose = require('mongoose')
const schema = mongoose.Schema

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
  name:String,
  city:String,
  sex:Number
})

//创建集合
const Model = mongoose.model('user',userSchema)

//创建文档
const doc = new Model({
  name:'eric',
  city:'深圳',
  sex:2
})

//将文档插入数据库中
doc.save()


//创建文档并把文档插入数据库中
Model.create({
  name:'嘻嘻',
  city:'广州',
  sex:1
},(err,doc) => {
  if(err) throw err
  console.log(doc)
})
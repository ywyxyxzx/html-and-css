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
  sex:Number,
  age:Number
})

//创建集合
const Model = mongoose.model('user',userSchema)

// Model.create({
//   name:'xx',
//   city:'上海',
//   sex:1,
//   age:28
// })

// Model.find({name:'6'}).then(res => {
//   console.log(res)
// })

// Model.findOne({name:'2'}).then(res => {
//   console.log(res)
// })

// Model.find({age:{$gte:18,$lte:38}}).then(res => {
//   console.log(res)
// })

// Model.find({city:/上/}).then(res => {
//   console.log(res)
// })

// Model.find().select('-name').then(res => {
//   console.log(res)
// })

// Model.find().sort('-age').then(res => {
//   console.log(res)
// })

// Model.find().skip(2).limit(3).then(res => {
//   console.log(res)
// })
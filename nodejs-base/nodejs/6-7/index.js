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
  name:String,
  city:String,
  sex:Number,
  age:Number
})

//创建集合
const Model = mongoose.model('user',userSchema)

// Model.findOneAndUpdate({name:'2'},{city:'深圳'}).then(res => {
//   console.log(res)
// })

// Model.updateOne({name:'2'},{city:'上海'}).then(res => {
//   console.log(res)
// })

Model.updateMany({name:'2'},{city:"深圳"}).then(res => {
  console.log(res)
})
// index.js

const app = getApp()
Page({
  data: {
    name:11313,
    isShow: true,
    menu:[
      {
        id: 1,
        name: "红烧茄子",
        price: 18
      },
      {
        id: 2,
        name: "宫保鸡丁",
        price: 20
      },
      {
        id: 3,
        name: "肉夹馍",
        price: 8
      }
    ]
  },
  handleClick(){
    this.setData({
      isShow : !this.data.isShow
    })
    
  },
  menuHandle(e){
    console.log(111,e, e.currentTarget.dataset.menu)
  },
  tapHandle() {
    console.log('子组件触发了');

  },
  boxTapHandle() {
    console.log('父组件触发了');
  },
  inputEdit(event) {
    // 简易版的双向数据绑定
    console.log(event, event.detail.value);
    this.setData({
      [event.currentTarget.dataset["key"]]: event.detail.value
    })
  }
})
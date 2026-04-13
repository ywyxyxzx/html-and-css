// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:23.09994,
    longitude:113.324520,
    markers:[
      {
        id:1,
        latitude:23.09994,
        longitude:113.324520,
        name:'T.T.T 创意园'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getGenterLocation(){
    this.mapCtx.getCenterLocation({
      success:res=>{
        console.log(res.longitude);
        console.log(res.latitude);
      }
    })
  },
  moveToLocation(){
    this.mapCtx.moveToLocation({
      longitude:123.324520,
      latitude:50.09994
    })
  },
  translateMarker(){
    this.mapCtx.translateMarker({
      markerId:1, //1表示当前的标注
      autoRotate: true,
      duration:1000,
      destination:{
        longitude: 113.3345211,
        latitude:23.10229
      },
      animationEnd(){
        console.log('动画完成了');
        
      }

    })
  },
  includePoints(){
    this.mapCtx.includePoints({
      padding:[10],
      points:[{
        latitude:23.10229,
        longitude:113.3345211,
      },{
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: {
      src: "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/B4tjPOdirk2w6jiw6/audioblocks-gushito-synthwave-memories_SbccabTZ__NWM.mp3?type=preview&origin=AUDIOBLOCKS&timestamp_ms=1775965492560&publicKey=RDes0FmyqLu5ljkTXXdQj71LI4erWQDJQAQRKiuHov6Mprz1YWsHCPsT40xfZh3v&organizationId=105794&apiVersion=2.0&stockItemId=192633&resolution=&endUserId=a4176ad15ca06edaa264eb658b1381ca1b917140&projectId=undefined&searchId=deb152d0-c8dd-4ae8-8bdf-80e77959e2b5&searchPageId=9ed28132-807d-44ee-aad3-ef6d8d9fb0bd"
    }
  },
  play() {
    this.audioCtx.play();
  },
  pause() {
    this.audioCtx.pause();
  },
  seekBack() {
    this.audioCtx.seek(0);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const audioCtx = wx.createInnerAudioContext();
    audioCtx.src = this.data.song.src;
    audioCtx.autoplay = true;
    audioCtx.startTime = 20;
    audioCtx.onPlay(() => {
      console.log('开始播放了');
    })
    this.audioCtx = audioCtx;
    // audioCtx.onPause
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
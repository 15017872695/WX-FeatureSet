//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  //事件处理函数

  onLoad: function () {
    
  },
  onShow(){
    if (!wx.getStorageSync('Token')) {
      wx.redirectTo({
        url: '/pages/Login/index',
      })
    }
  }
})

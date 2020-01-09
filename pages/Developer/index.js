var config = require('../../utils/config.js')
var app = getApp();
Page({
  data: {
    gridList: [
      // { enName: 'favorite', zhName: '收藏' },
      // { enName: 'history', zhName: '浏览记录' },
      // { enName: 'shake', zhName: '摇一摇' },
      // { enName: 'gallery', zhName: '相册' },
      { enName: 'setting', zhName: '设置' }
    ],
    skin: '',
    userInfo:null
  },
  onLoad: function (cb) {
    typeof cb == 'function' && cb()
  },
  onShow: function () {
    var that = this
    console.log(app.globalData.userInfo)
    // 检测是否存在用户信息
    if (app.globalData.userInfo != null) {
      that.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
     // 获取用户信息
    this.getUserInfo()
      // clearTimeout(time)
    }
    
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        if (res.data == "") {
          that.setData({
            skin: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            skin: res.data
          })
        }
      }
    })
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function (e) {
    var data = e.currentTarget.dataset;
    console.log(data)
    wx.navigateTo({
      url: "./" + data.url + '/index'
    })
  },
  viewSkin: function () {
    wx.navigateTo({
      url: "./skin/index"
    })
  },

  getUserInfo: function () {
    var that = this
    wx.login({
      success: function (re) {
        wx.getUserInfo({
          success: function (res) {
            console.log(res)
            app.globalData.userInfo = res.userInfo;
            that.setData({
              userInfo:res.userInfo
            })
          },
          fail(error){
            console.log(error)
          }
        })
      }
    })
  },
})
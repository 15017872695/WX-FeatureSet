// pages/Developer/setting/systemInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cells: [],
    minaVersion: 'v2.0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        var cells = [[]]
        var resolution = res.windowWidth*res.pixelRatio + '*' + res.windowHeight*res.pixelRatio
        cells[0].push({title:'手机型号', text:res.model, access: false, fn: ''})
        cells[0].push({title:'分辨率', text:resolution, access: false, fn: ''})
        cells[0].push({title:'系统语言', text:res.language, access: false, fn: ''})
        cells[0].push({title:'微信版本', text:res.version, access: false, fn: ''})
        cells[0].push({title:'小程序版本', text:that.data.minaVersion, access: false, fn: ''})
        that.setData({
          cells: cells
        })
      }
    })
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
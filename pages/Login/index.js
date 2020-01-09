// pages/Login/index.js
let username = '';
let password = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImgUrl:'/assets/img/timg.jpg',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.setData({
      bgImgUrl: 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(this.data.bgImgUrl, 'base64')
    })
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

  },
  usernameInput(e){

    username = e.detail
  },
  passwordInput(e){

    password = e.detail
  },
  noPossword(){
    wx.showModal({
      title: '系统消息',
      content: '程序猿小哥哥还在加班中.....',
      showCancel:false
    })
  },
  onClickIcon(){
    wx.showModal({
      title: '系统消息',
      content: '账号/密码不能为空，其他随意输入哦~~ 这个程序猿很随便= =',
      showCancel: false
    })
  },
  goLogin(e){
    console.log(username,password)
    if (username == '' || password == ''){
      wx.showToast({
        title: '不能偷懒哦~',
        icon:'none',
        duration:2000
      })
      return false;
    }
    wx.showLoading({
      title: '登录中...',
      mask:true
    })
    let timeout = setTimeout(function(){
      wx.setStorageSync('Token', '提灯的小僧');
      wx.hideLoading();
      clearTimeout(timeout);
      wx.switchTab({
        url: '../index/index',
      })
    },1000)
  }
})
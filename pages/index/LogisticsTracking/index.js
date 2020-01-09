// pages/index/LogisticsTracking/index.js
let Logistics = require('./logistics-model.js');
console.log(Logistics)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expresslist: [],//物流详情列表 ,
    showexpress:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      expresslist: Logistics.default,
      showexpress:true
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

  },
  //查看物流
  express(e){
    
  },
 
//点击关闭物流信息盒子
  closeexpress(){
    this.setData({
      showexpress: false
    })
  },
})
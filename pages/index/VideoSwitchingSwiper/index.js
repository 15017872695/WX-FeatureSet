// pages/index/VideoSwitchingSwiper/index.js
let newCurrent = true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videos: [
      {
        videoUrl: "http://video.microc.cn/dG1wL3d4MzkwNjg3YjY3OTZjZTMzYS5vNnpBSnMzYTJqaDJHUWRGVllDV2JhaHhjTUFzLkFaeGE2d1NIVTV3cjkyNGFlOGIyMjMxYTgwNjYyOTVhZjY2YTJjN2VjY2MwLm1wNA==",
        durations: 10,
        poster: "https://p3.pstatp.com/large/131040001488de047292a.jpg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6',
        title:'夏日风情',
        play:true
      },
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fce0000bg36q72j2boojh1t030g&line=0",
        durations: 10,
        poster: "https://p99.pstatp.com/large/12c5c0009891b32e947b7.jpg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6',
        title:'夏日风情',
        play:true
      },
      {
        videoUrl: "https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0300fd10000bfrb9mlpimm72a92fsj0&line=0",
        durations: 10,
        poster: "https://p99.pstatp.com/large/12246000525d4c87900e7.jpg",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6',
        title:'夏日风情',
        play:true
      },
      {
        videoUrl: "http://video.microc.cn/lecturer_iOS_201903181745504660A5DxJE9a.mp4",
        durations: 10,
        poster: "http://video.microc.cn/lecturer_iOS_201903181745504660A5DxJE9a.mp4?vframe/jpg/offset/0",
        likenum: 10,
        commnetnum: '20',
        rewardNum: '6',
        title:'夏日风情',
        play:true
      }
    ],
    vertical: false,
    indexCurrent:0,
    indicatorDots: true,
    controls: false,
    playBtn: false,
    duration: 1000,
    cache: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = this.data.videos;
    wx.createVideoContext('myVideo' + this.data.indexCurrent).play();
    data[0].play = false;
    this.setData({
      videos:data
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

  swiperChange(e){
    let self = this;
    let data = this.data.videos;
    // 停止上一个视频播放
    wx.createVideoContext('myVideo' + self.data.indexCurrent).pause();
    self.setData({
      indexCurrent:e.detail.current
    })
    // 延迟500ms，再播放本视频
    setTimeout(function(){
      wx.createVideoContext('myVideo' + self.data.indexCurrent).play();
    },500)
    for(let i=0;i<data.length;i++){
      data[i].play = true;
    }
    data[self.data.indexCurrent].play = false;
    self.setData({
      videos:data
    })
  },

  videoPlay(e) {
    // 本视频id
    var curIdx = e.currentTarget.dataset.index;
    let data = this.data.videos;
    console.log()
    if(newCurrent){
      wx.createVideoContext('myVideo' + curIdx).pause();
      data[curIdx].play = true;
      newCurrent = false;
    }else{
      wx.createVideoContext('myVideo' + curIdx).play();
      data[curIdx].play = false
      newCurrent = true;
    }
    
    
    this.setData({
      videos:data
    })
  }
})
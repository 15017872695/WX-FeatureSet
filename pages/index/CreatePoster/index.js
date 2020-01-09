// pages/index/CreatePoster/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImgUrl: '/assets/img/timg.jpg',
    touxiang:'/assets/img/HTMLicon.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.formSubmit()
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

  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function () {
    //将模板图片绘制到canvas,在开发工具中drawImage()函数有问题，不显示图片
    var erweima = '/assets/img/userImg.jpg';
    var _this = this;
    // 使用Promise是为了处理网络图真机不渲染不出的问题
    // let promise1 = new Promise(function (resolve, reject) {
    //   let imgUrls = '/assets/img/timg.jpg';
    //   console.log(imgUrls)
    //   wx.downloadFile({
    //     url: imgUrls,
    //     success: function (res) {
    //       console.log(res)
    //       resolve(res.tempFilePath);
    //     },
    //     fail(res) {
    //       console.log(res)
    //     }
    //   })
    // })
    // let touxiang = new Promise(function (resolve, reject) {
    //   let imgUrls = _this.data.touxiang; 
    //   wx.downloadFile({
    //     url: imgUrls,
    //     success: function (res) {
    //       console.log(res)
    //       resolve(res.tempFilePath);
    //     },
    //     fail(res) {
    //       console.log(res)
    //     }
    //   })
    // })
    // Promise.all([]).then(res => {
      // console.log(res)
      var that = this;
      var context = wx.createCanvasContext('mycanvas');
      context.setFillStyle("#2D2D2F")
      context.fillRect(0, 0, 375, 667);

    context.drawImage('/assets/img/timg.jpg', 40, 80, 300, 430);
      context.save(); // 保存当前context的状态

      //将模板图片绘制到canvas,在开发工具中drawImage()函数有问题，不显示图片
      //不知道是什么原因，手机环境能正常显示
    context.drawImage('/assets/img/bg.jpg', 0, 0, 375, 70);
      // var path1 = that.data.touxiang;

      //绘制标题
      context.setFontSize(24);
      context.setFillStyle('#fff');
      context.setTextAlign('center');
      context.fillText('小程序各种功能集', 195, 45);
      context.stroke();
      context.save(); // 保存当前context的状态

      //绘制名字
      context.setFontSize(23);
      context.setFillStyle('#fff');
      context.setTextAlign('center');
      context.fillText('先森丶余', 140, 590);
      context.stroke();

      //绘制分享指引信息
      context.setFontSize(16);
      context.setFillStyle('#fff');
      context.setTextAlign('center');
      context.fillText('给您推荐了提灯的小僧', 160, 620);
      context.stroke();

      //绘制小程序码
      context.drawImage(erweima, 260, 550, 95, 95); // 在刚刚裁剪的园上画图

      // 绘制用户头像和白色边框
      context.beginPath();
      context.save();
      context.arc(40, 600, 30, 0, 2 * Math.PI) //画出圆
      context.strokeStyle = "#fff";
      context.lineWidth = 5;
      context.stroke();
      context.restore();
      context.closePath();
      context.clip(); //裁剪上面的圆形
      context.drawImage(that.data.touxiang, 10, 570, 60, 60);

      //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
      context.draw(false, res => {
        setTimeout(function () {
          wx.canvasToTempFilePath({
            canvasId: 'mycanvas',
            success: function (res) {
              var tempFilePath = res.tempFilePath;
              console.log(tempFilePath)
              that.setData({
                imagePath: tempFilePath,
                canvasHidden: true
              });
            },
            fail: function (res) {
              console.log(res);
            }
          });
        }, 500);
      });
    // })
  },
  //点击保存到相册
  baocun: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false
              })
              wx.navigateBack()
            }
          }, fail: function (res) {

          }
        })
      }
    })
  },
  //点击生成
  formSubmit: function (e) {
    var that = this;
    this.setData({
      maskHidden: false
    });
    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      duration: 1000
    });
    that.createNewImg();
    setTimeout(function () {
      wx.hideToast()
      
      that.setData({
        maskHidden: true
      });
    }, 1000)
  },

  hideBox() {
    this.setData({
      maskHidden: false
    });
    wx.navigateBack()
  },
})
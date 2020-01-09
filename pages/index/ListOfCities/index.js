
import ListOfCitiesData from "../../../utils/ListOfCitiesData.js";
const app = getApp();

Page({
  data: {
    value:'',
    city: '',
    cityData: {},
    _py: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    //搜索列表
    inputVal: '',
    hidden: true,
    showPy: '★',
    selectData: []
  },
  onLoad: function () {
    var that = this;
    this.setData({
      cityData: ListOfCitiesData
    })
  },

  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  onSearch() {
    Toast('搜索' + this.data.value);
  },

  onClick() {
    Toast('搜索' + this.data.value);
  },


  //选择城市
  selectCity: function (e) {
    var dataset = e.currentTarget.dataset;
    console.log(dataset)
    wx.showToast({
      title: dataset.fullname,
      icon: 'none',
      duration: 2000
    })
    // api.post(app.globalData.recruitmentInfo, dataset.fullname).then(res => {
    //   wx.setStorageSync('localCity', dataset.fullname)
      // wx.navigateBack({
      //   delta: 1,
      // })
    // })
  },

  //获取文字信息
  getPy: function (e) {
    this.setData({
      hidden: false,
      showPy: e.target.id,
    })
  },

  setPy: function (e) {
    this.setData({
      hidden: true,
      scrollTopId: this.data.showPy
    })
  },

  //触发全部开始选择
  tStart: function () {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd: function () {
    this.setData({
      hidden: true,
      scrollTopId: this.data.showPy
    })
  },

  //输入
  input: function (e) {
    let cityData = this.data.cityData;
    let selectData = [];
    if (e.detail.value == '') {
      this.setData({
        inputVal: e.detail.value,
        selectData
      });
    } else {
      for (let i in cityData) {
        for (let j in cityData[i]) {
          if (cityData[i][j].fullName.includes(e.detail.value)) {
            selectData.push(cityData[i][j].fullName)
          }
        }
      }
      console.error(selectData);
      this.setData({
        selectData,
        inputVal: e.detail.value,
      });
    }
  },

})

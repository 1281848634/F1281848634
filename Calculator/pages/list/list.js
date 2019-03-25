
//获取应用实例
var app = getApp()
Page({
  data: {
   logs:[]
  },
  onLoad: function () {
      var logss =wx.getStorageSync('callogs');
      this.setData({
        logs: logss
      })
  }
})

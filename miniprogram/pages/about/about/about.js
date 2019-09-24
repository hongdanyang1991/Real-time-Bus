
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    value: 330302
  },

  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },

  onShow() {

  },
});

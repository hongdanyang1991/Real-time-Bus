
const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    areaList: {},
    loading: true,
    value: 330302
  },

  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },

  onShow() {
    wx.request({
      url: 'https://cashier.youzan.com/wsctrade/uic/address/getAllRegion.json',
      success: response => {
        this.setData({
          loading: false,
          areaList: response.data.data
        });
      }
    });

  



  },
});

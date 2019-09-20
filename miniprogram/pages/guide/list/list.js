const app = getApp();



Page({


  data: {
    book_list: [],
    gjj_list:'gjj-list',
    yanglao_list:'yanglao-list',
    type: ''
  },


  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

    this.setData({
      type: options.type
    })

    var _this = this;

    const db = wx.cloud.database()
    // 查询当前用户所有的 counters




    db.collection(options.type+'-list').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          book_list: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  } 

})
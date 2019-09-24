const appInstance = getApp();

Page({

  options: {
    addGlobalClass: true,
  },

  data: {
    gjj_content:'',
   
  },


  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var _this = this;
    const { globalData: { defaultCity, defaultCounty } } = appInstance
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection(options.type+'-content').where({
      'list_id': options.id,
      city: defaultCity
    }).get({
      success: res => {
        
        if (Object.keys(res.data).length === 0){
          this.setData({
            gjj_content: {content:"<p>收录中</p>"},
          });
        }else{
          this.setData({
            gjj_content: res.data[0],
          });
        }
        console.log('[数据库] [查询记录] 成功!!!: ', res)
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
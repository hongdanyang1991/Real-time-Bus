const appInstance = getApp();
const { globalData: { defaultCity, defaultCounty } } = appInstance

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    location: defaultCity,
    county: defaultCounty,
    elements: [
      {
        title: '养老保险',
        name: 'pension',
        color: 'green',
        type:'yanglao',
        icon: 'newsfill'
      },
      {
        title: '住房公积金',
        name: 'accumulation',
        color: 'green',
        type: 'gjj',
        icon: 'newsfill'
      },
      {
        title: '医疗保险',
        name: 'medical',
        color: 'green',
        type: 'yiliao',
        icon: 'newsfill'
      },
      {
        title: '失业保险',
        name: 'unemployment',
        color: 'green',
        type: 'shiye',
        icon: 'newsfill'
      },
      {
        title: '工伤保险',
        name: 'injury',
        color: 'green',
        type: 'gongshang',
        icon: 'newsfill'
      },
      {
        title: '生育保险',
        name: 'birth',
        color: 'green',
        type: 'shengyu',
        icon: 'newsfill'
      }
    ],
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      const { globalData: { defaultCity, defaultCounty } } = appInstance
      this.setData({
        location: defaultCity,
        county: defaultCounty
      })
     },
    hide: function () { },
    resize: function () { },
  }

  
})
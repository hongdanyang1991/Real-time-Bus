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
        name: 'list',
        color: 'green',
        icon: 'newsfill'
      },
      {
        title: '住房公积金',
        name: 'Accumulation fund',
        color: 'green',
        icon: 'newsfill'
      },
      {
        title: '医疗保险',
        name: 'car',
        color: 'green',
        icon: 'newsfill'
      },
      {
        title: '失业保险',
        name: 'car',
        color: 'green',
        icon: 'newsfill'
      },
      {
        title: '工伤保险',
        name: 'car',
        color: 'green',
        icon: 'newsfill'
      },
      {
        title: '生育保险',
        name: 'car',
        color: 'green',
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
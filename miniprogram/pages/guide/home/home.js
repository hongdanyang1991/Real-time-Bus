import { commonMessage } from '../../location/locale/commonMessageZhCn'
import util from '../../../utils/util'

const appInstance = getApp();
const { globalData: { defaultCity, defaultCounty, defaultAuto } } = appInstance;
const {
  isNotEmpty,
  safeGet,
  getCityListSortedByInitialLetter,
  getLocationUrl,
  getCountyListUrl,
  getIndexUrl,
  onFail,
} = util;

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    location: defaultCity,
    county: defaultCounty,
    auto: defaultAuto,
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
    city: commonMessage['location.getting'],
    currentCityCode: '',
    inputName: '',
    completeList: [],
    county: '',
    showCountyPicker: false,
    auto: true, // 自动手动定位开关
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      const { globalData: { defaultCity, defaultCounty, defaultAuto } } = appInstance;

      console.log("--------defaultAuto--------"+defaultAuto);
    

      // 定位
      if (defaultAuto){
        this.getLocation();
      }
      

      this.setData({
        location: defaultCity,
        county: defaultCounty
      })

      
     },
    hide: function () { },
    resize: function () { },
  },

  methods:{

    getLocation: function () {
      console.log(commonMessage['location.city.getting'])

      this.setData({ county: '' })
      wx.getLocation({
        type: 'wgs84',
        success: res => this.getLocationFromGeoCoord(res),
        fail: onFail(commonMessage['location.city.fail']),
      })
    },

    getLocationFromGeoCoord: function (geoCoord) {
      const { latitude, longitude } = geoCoord
      wx.request({
        url: getLocationUrl(latitude, longitude),
        success: location => this.setCityCounty(location)
      })
    },

    setCityCounty: function (location) {
      const { city, adcode, district } = safeGet(['data', 'result', 'ad_info'], location)
      if (this.data.auto) { // 如果开始手动选择，以手动为准
        this.setData({
          location: city,
          county: district
        })
        appInstance.globalData.defaultCity = city
        appInstance.globalData.defaultCounty = district
      }
    }

  }

  
})
import { LETTERS, CITY_LIST } from '../pages/location/locale/citydata'
import config from 'config'


// API
const getLocationUrl = (latitude, longitude) => (`https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${config.key}`)
const getCountyListUrl = code => (`https://apis.map.qq.com/ws/district/v1/getchildren?&id=${code}&key=${config.key}`)
const getIndexUrl = () => ('/pages/index/index')

/**
 * 安全地在深层嵌套对象中取值
 * get deeply nested data from an object safely, return null if not found
 * @param {Array} keyList an Array of keys
 * @param {Object} obj 
 */
const safeGet = (keyList, obj) => keyList.reduce((preValue, curKey) => ((preValue && preValue[curKey]) ? preValue[curKey] : null), obj)

const isNotEmpty = array => (Array.isArray(array) && array.length > 0)

const isChinese = str => (/^[\u4e00-\u9fa5]+$/.test(str))

// 城市名按首字母分组
const getCityListSortedByInitialLetter = () => (
  LETTERS.map(
    letter => ({
      initial: letter,
      cityInfo: CITY_LIST.filter(city => city.initial == letter)
    })
  )
)

const getSlicedName = (cityObj, key, sliceLen) => (cityObj[key] && cityObj[key].slice(0, sliceLen))

const onFail = (err) => { console.log(err) } // add your logic here e.g. show a toast



const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


module.exports = {
  formatTime: formatTime,
  getLocationUrl: getLocationUrl,
  getCountyListUrl: getCountyListUrl,
  getIndexUrl: getIndexUrl,
  safeGet: safeGet,
  isNotEmpty: isNotEmpty,
  isChinese: isChinese,
  getCityListSortedByInitialLetter: getCityListSortedByInitialLetter,
  getSlicedName: getSlicedName,
  onFail: onFail,
}

Page({
  data: {
    PageCur: 'guide'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '五险一金~帮你查',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})
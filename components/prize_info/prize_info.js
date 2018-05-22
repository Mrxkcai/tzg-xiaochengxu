const app = getApp()
const baseUrl = getApp().globalData.baseUrl

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    prizeInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    countdown: 0,
    awardTime: '',
    tzgUserInfo: {}
  },

  /**
   * 组件的方法列表
   */
  ready() {
    this.setData({
      awardTime: this.properties.prizeInfo.startTime.substring(5, 16).replace('-', '月').replace(' ', '日') + ' ',
      tzgUserInfo: app.globalData.tzgUserInfo
    })
    // console.log(this.data.tzgUserInfo)
    if (this.properties.prizeInfo.status == 0) {
      this.getCountdown()
    }
  },
  methods: {
    joinAward(e) {
      this.triggerEvent('joinAward', e.detail)
    },
    getCountdown() {
      let crruntTime = +new Date()
      let awardTime = +new Date(this.properties.prizeInfo.startTime)
      let distance = (awardTime - crruntTime)/1000
      // console.log(this.properties.prizeInfo.startTime)
      // console.log(crruntTime + '|' + distance + '|' + awardTime)
      if (distance <= 0) {
        this.setData({
          'prizeInfo.status': 1,
        })
        return
      }
      let time = this.getTwo(distance / 3600) + ':' + this.getTwo(distance / 60 % 60) + ':' + this.getTwo(distance % 60)
      this.setData({
        countdown: time
      })

      setTimeout(() => {
        this.getCountdown()
      }, 1000)
    },
    getTwo(time) {
      time = parseInt(time)
      return time < 10? '0'+time : time
    },
    onGotUserInfo(e) {
      if (e.detail.userInfo) {
        app.globalData.userInfo = e.detail.userInfo
        wx.request({
          url: baseUrl + '/user/addUserInfo',
          method: 'POST',
          data: {
            avatarUrl: app.globalData.userInfo.avatarUrl,
            nickName: app.globalData.userInfo.nickName,
            openId: app.globalData.openId,
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            //1010 已授权
            if (res.data.code == 200) { //第一次保存用户信息
              app.globalData.tzgUserInfo = res.data.data
              this.setData({
                tzgUserInfo: res.data.data
              })
            }
            // this.getUserInfo()
          }
        })
      }
    }
  }
})

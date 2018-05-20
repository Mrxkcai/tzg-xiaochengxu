// components/component-tag-name.js
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
    awardTime: ''
  },

  /**
   * 组件的方法列表
   */
  ready() {
    this.setData({
      awardTime: this.properties.prizeInfo.startTime.substring(5, 16).replace('-', '月').replace(' ', '日') + ' '
    })
    if (this.properties.prizeInfo.status == 0) {
      this.getCountdown()
    }
  },
  methods: {
    joinAward(e) {
      console.log(e)
      this.triggerEvent('joinAward', e.detail)
    },
    getCountdown() {
      let crruntTime = +new Date()
      let awardTime = +new Date(this.properties.prizeInfo.startTime)
      let distance = (awardTime - crruntTime)/1000
      console.log(this.properties.prizeInfo.startTime)
      console.log(crruntTime + '|' + distance + '|' + awardTime)
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
    }
  }
})

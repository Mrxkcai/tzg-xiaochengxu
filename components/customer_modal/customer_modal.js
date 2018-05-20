Component({
  options:{
    multipleSlots: true 
  },
  data:{
    cancel: true
  },
  properties: {
    contant_server: {
      type: String,
      value: '联系客服'
    },
    contant_phone:{
      type: Number,
      value: '0571-8888888',
    },
    contant_cancel: {
      type: String,
      value: '取消',
    },
    contant_call: {
      type: String,
      value: '拨打',
    },
  },
  methods:{
    serverCancel: function () {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.opacity(0).step()
      this.setData({
        animationData: animation.export()
      })
      setTimeout(function () {
        animation.opacity(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 1000)
      // this.setData({
      //   cancel: !this.data.cancel
      // })
    },
  }
})
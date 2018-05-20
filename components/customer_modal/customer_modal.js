Component({
  options:{
    multipleSlots: true 
  },
  data:{
    cancel: true
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
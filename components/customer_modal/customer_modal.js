Component({
  options:{
    multipleSlots: true 
  },
  properties: {
    comfirmTip: {
      type: Object,
      value: {}
    }
  },
  data:{
    show: false,
    animationData: ''
  },
  methods:{
    serverOpen() {
      this.setData({
        show: true
      })
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.opacity(1).step()
      this.setData({
        animationData: animation.export(),
      })
    },
    serverCancel() {
      this.animation.opacity(0).step()
      this.setData({
        animationData: this.animation.export()
      })

      setTimeout(()=>{
        this.setData({
          show: false
        })
      }, 200)
    },
    rightTap() {
      this.serverCancel()
      this.triggerEvent('successTap')
    }
  }
})
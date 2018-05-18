Component({
  properties: {
    // winVisible: {
    //   type: Boolean,
    //   value: false
    // },
    winTip: {
      type: Object,
      value: {}
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    winVisible: false,
    animationData: '',
    bodyAnimModalData: ''
  },
  methods: {
    openModal() {
      this.setData({
        winVisible: true
      })
      this.openOverlayModal()
      this.openBodyModal()
    },
    closeModal() {
      this.closeOverlayModal()
      this.closeBodyModal()
    },
    openBodyModal() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
        // timingFunction: 'cubic-bezier(.55, 0, .55, .2)',
        delay: 0
      })

      this.bodyAnimation = animation
      var height = wx.getSystemInfoSync().windowHeight 
      animation.translateY(0).step()
      // animation.scale(2, 2).rotate(45).step()

      this.setData({
        bodyAnimModalData: animation.export(),
      })
    },
    closeBodyModal() {
      this.bodyAnimation.translateY(-500).step();
      this.setData({
        bodyAnimModalData: this.bodyAnimation.export()
      });
    },
    openOverlayModal() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'cubic-bezier(.55, 0, .55, .2)',
        delay: 0
      })
      
      this.animation = animation
      animation.opacity(1).step();

      this.setData({
        animModalData: animation.export(),
      })
    },
    closeOverlayModal() {
      this.animation.opacity(0).step();
      this.setData({
        animModalData: this.animation.export()
      });

      setTimeout(() => {
        this.setData({
          winVisible: false
        });
      }, 500)
    }
  }
})

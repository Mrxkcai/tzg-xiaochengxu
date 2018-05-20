//index.js
//获取应用实例
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data:{
    img: "../../images/rule_logo.png",
    imges: "../../images/relu_copy.png",
    picture:"../../images/close.png",
    title: "活动规则",
    show: false
  },
  methods:{
    ruleOpen() {
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
        animationData: animation.export()
      })
    },
    ruleClose() {
      this.animation.opacity(0).step()
      this.setData({
        animationData: this.animation.export()
      })
      setTimeout(()=> {
        this.setData({
          show: false
        })
      }, 200)
    }
  }
})

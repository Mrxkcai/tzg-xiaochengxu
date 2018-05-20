//index.js
//获取应用实例
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data:{
    img: "../../images/rule_logo.png",
    imges: "../../images/relu_copy.png",
    title: "活动规则",
    fail: true
  },
  methods:{
    ruleClose: function () {
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
      //   fail: !this.data.fail
      // })
    }
  }
})

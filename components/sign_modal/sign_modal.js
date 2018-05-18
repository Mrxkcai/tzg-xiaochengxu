//index.js
//获取应用实例
Component({
  options:{
    multipleSlots: true
  },
  data:{
    ims: "../../images/sign_back.png",
    imgs1: "../../images/sign.png",
    quan: "../../images/gary_score.png",
    signFail: true,
    animationData: {}
  },
  methods:{
    signClose: function () {
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
      // console.log(123)
      // this.setData({
      //   signFail: !this.data.signFail
      // })
    }
  }
})

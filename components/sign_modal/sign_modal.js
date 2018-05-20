//index.js
//获取应用实例
Component({
  options:{
    multipleSlots: true
  },
  properties: {
    signTip: {
      type: Object,
      value: {}
    }
  },
  data:{
    ims: "../../images/sign_back.png",
    imgs1: "../../images/sign.png",
    quan: "../../images/gary_score.png",
    signFail: false,
    animModalData: ''
  },
  methods:{
    signOpen() {
      this.setData({
        signFail: true
      });
      const animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'cubic-bezier(.55, 0, .55, .2)',
      });

      this.maskAnim = animation;

      animation.opacity(1).step();
      this.setData({
        animModalData: animation.export(),
      });
    },
    signClose() {
      this.maskAnim.opacity(0).step();
      this.setData({
        animModalData: this.maskAnim.export(),
      });

      setTimeout(()=>{
        this.setData({
          signFail: false
        })
      }, 200)
    }
  }
})

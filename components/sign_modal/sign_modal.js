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
    signFail: true
  },
  methods:{
    signClose: function () {
      this.setData({
        signFail: !this.data.signFail
      })
    }
  }
})

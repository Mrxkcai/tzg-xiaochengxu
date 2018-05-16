//index.js
//获取应用实例
// var interval = null 
Page({
  data: {
    src: "../../images/logo.png",
    img:"../../images/rule_logo.png",
    imges:"../../images/relu_copy.png",
    sumbitShow:false,
    see: true,
    show: false,
    inputShow: true,
    infoMess: "",
    inputPhone: "",
    inputYan: "",
    huozheng:"",
  },
  onMyEvent: function (e) {
    this.setData({
      see:!this.data.see
    })
  },
  //手机号的验证
  inputPhone: function (e) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/g;
    if (!myreg.test(e.detail.value)) {
      wx.showToast({
        title: '请输入11位号',
      })
    }
    this.setData({
     inputPhone: e.detail.value
   })
  },
  // 当验证码失去焦点时验证
  inputYan: function (e) {
    var that = this;
    var inputYan = e.detail.value
    var huozheng = this.data.huozheng
    console.log(e.detail.value)
    that.setData({
      inputYan: inputYan,
      zhengTrue: false,
    })
    if (inputYan.length >= 4) {
      if (inputYan == huozheng) {
        that.setData({
          zhengTrue: true,
        })
      } else {
        that.setData({
          zhengTrue: false,
          sumbitShow: !this.data.sumbitShow,
        })
        wx.showModal({
          content: '输入验证码有误',
          showCancel: false,
          success: function (res) {
          }
        })
        
      }
    }
  },
  //提交按钮的函数
  loginBtn: function () {
    if (this.data.inputPhone.length == 0 ||
      this.data.inputYan.length == 0) {
      wx.showToast({
        title: '手机号或验证码错误！',
        icon: "none",
        duration: 2000
      })
    } else {
      var inputYan = this.data.inputYan
      var huozheng=this.data.huozheng;
      if (inputYan == huozheng){
        this.setData({
          show: !this.data.show
        })
      }else{
        wx.showToast({
          title: '手机号或验证码错误!',
          icon:"none",
          duration: 1000
        })
      }
    }
  },
})

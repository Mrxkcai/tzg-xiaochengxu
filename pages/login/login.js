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
    console.log(e.detail.value)
    wx.setStorage({
      key: "inputPhone",
      data: e.detail.value
    })
    this.setData({
     inputPhone: e.detail.value
    })
  },
  // 当验证码失去焦点时验证
  inputYan: function (e) {
    this.setData({
      inputYan: e.detail.value
    })
    // console.log(e.detail.value)
    // var that = this;
    // var inputYan = e.detail.value
    // var huozheng = this.data.huozheng
    // that.setData({
    //   inputYan: inputYan,
    //   zhengTrue: false,
    // })
    // if (inputYan.length >= 4) {
    //   if (inputYan == huozheng) {
    //     that.setData({
    //       zhengTrue: true,
    //     })
    //   } else {
    //     that.setData({
    //       zhengTrue: false,
    //       sumbitShow: !this.data.sumbitShow,
    //     })
    //     wx.showModal({
    //       content: '输入验证码有误',
    //       showCancel: false,
    //       success: function (res) {
    //       }
    //     })
        
    //   }
    // }
  },
  //提交按钮的函数
  loginBtn: function () {
    var that = this;
    console.log(this.data.inputPhone, this.data.inputYan)
    if (this.data.inputPhone.length == 0 ||
      this.data.inputYan.length == 0) {
      wx.showToast({
        title: '手机号或验证码错误！',
        icon: "none",
        duration: 2000
      })
    } else {
      wx.request({
        url:'https://api.taozugong.com/award/sms/verifyMobile',
        method:'POST',
        // dataType: 'json',
        data:{
          mobile:this.data.inputPhone,
          authCode:this.data.inputYan,
          openId:111
        },
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        success:function(res){
          console.log(res.data)
          if(res.data.code==200){
            
            console.log(123)
            // var show = !this.data.show
              that.setData({
              show: !that.data.show
            })
          }
        }
      })
    }
  }
})

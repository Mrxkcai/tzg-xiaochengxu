var interval = null //倒计时函数
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
 data: {
   date: '请选择日期',
   fun_id: 2,
   time: '获取验证码', //倒计时 
   currentTime: 61,
   butShow:true,
   result:""
  },
 properties: {
   inputPhone: {            // 属性名
     type: Number,     
     value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
   }
 },
 methods: {
   getCode: function (options) {
     var that = this;
     var currentTime = that.data.currentTime
     this.setData({
        butShow:!this.data.butShow,
     })
     interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
     }, 1000)
     var myreg = /^[1][3,4,5,7,8][0-9]{9}$/g;
    //  if () {
    //    wx.showToast({
    //      title: '请输入11位手机号',
    //      icon: "none",
    //    })
    //  }
     if (!this.data.inputPhone || !myreg.test(this.data.inputPhone)) {
      console.log(3)
      wx.showToast({
        title: '请输入11位手机号',
        icon: "none",
      })
      clearInterval(interval)
    }
    wx.request({
      url: 'https://api.taozugong.com/award/sms/getAuthCode',
      data: {
        mobile: this.data.inputPhone,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
      }
    })
   },
   getVerificationCode() {
     this.getCode();
   },
 }
})
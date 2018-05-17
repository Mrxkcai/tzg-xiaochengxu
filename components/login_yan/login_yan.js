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
 methods: {
   getCode: function (options) {
     var that = this;
     var currentTime = that.data.currentTime
     this.setData({
        butShow:!this.data.butShow,
     })
    //  var phone=this.data.
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
     }, 500)
     wx.getStorage({
       key: 'inputPhone',
       success: function (res) {
         wx.request({
           url: 'https://api.taozugong.com/award/sms/getAuthCode?',
           data: {
             mobile: res.data,
           },
           header: {
             'content-type': 'application/json'
           },
           success: function (res) {
             wx.setStorage({
               key: "result",
               data: res.data.code
             })
           }
         })
       }
     })
   },
   getVerificationCode() {
     this.getCode();
     var that = this
     that.setData({
       disabled: true
     })
   },
 }
})
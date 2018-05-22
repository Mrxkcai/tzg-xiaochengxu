//app.js
App({
  onLaunch() {

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res)
    //     if (res.code) {
    //       wx.request({
    //         url: 'https://api.taozugong.com/award/user/login',
    //         method: 'GET',
    //         data: {
    //           code: res.code
    //         },
    //         header: {
    //           'content-type': 'application/json' // 默认值
    //         },
    //         success: (res) => {
    //           console.log('login:'+ JSON.stringify(res))

    //           if (res.data.code == 200) {
    //             this.globalData.openId = res.data.data.openId
    //             this.globalData.tzgUserInfo = res.data.data
    //             this.globalData.userInfo = res.data.data
    //           } else if (res.data.code == 1003) { //未授权
    //             this.globalData.openId = res.data.data
    //           }
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: res => {
    //           this.globalData.userInfo = res.userInfo
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     } else if (!res.authSetting['scope.userInfo']) { //没有授权
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success: (res) => {
    //         }
    //       })
    //     }
    //   }
    // });
  },
  onShow() {
  },
  globalData: {
    openId: '',
    baseUrl: 'https://api.taozugong.com/award',
    userInfo: null, //wx
    tzgUserInfo: ''
  }
})
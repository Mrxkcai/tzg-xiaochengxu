const app = getApp()
const baseUrl = getApp().globalData.baseUrl
Page({
  data: {
    tzgUserInfo: '',
    userInfo: '',
    pageNo: 1,
    pageSize: 10,
    isEnd: false,
    winTip: {
      title: '恭喜你抽中了雅萌瘦脸射频美颜仪',
      contentList: ['请确保绑定好手机号，客服会第一时间联系你', '你也可以主动联系客服']
    },
    loseTip: '好可惜，差点就中了呢，再试试吧',
    comfirmTip: {
      title: '客服电话',
      context: '0571-85180735',
      leftButton: '取消',
      rightButton: '拨打'
    },
    ruleTip: {
      title: "活动规则",
      contentList: ['每天签到领到的积分，消耗不等量积分 可获得不同商品的抽奖机会。', '中奖者我们会通过客服电话与您联系，并在第一时间送出您的奖品。', '活动解释权归淘租公所有。']
    },
    awardList: [
      {
        awardId: 15,
        // isClosed: false,//是否关闭
        awardType: 1,//抽奖类型
        isParticipated: false, //是否参与
        isWinning: false,//是否中奖
        status: 0,//开奖状态 0未开 1抽奖中 2结束

        shareLink: '',//分享链接
        productPic: 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        productTitle: 'Apple iPhone8 全网通4G手机亮色32GApple iPhone8 全网通4G手机亮色32G',
        productDesc: '121',//商品描述
        score: 1,
        priceSnapshot: '5000.00',
        startTime: '2018-05-21 17:56:56',//开奖时间
        endTime: '05-12 02:10',//结束时间
      },
      {
        awardId: 15,
        // isClosed: false,//是否关闭
        awardType: 1,//抽奖类型
        isParticipated: false, //是否参与
        isWinning: false,//是否中奖
        status: 0,//开奖状态 0未开 1抽奖中 2结束

        shareLink: '',//分享链接
        productPic: 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        productTitle: 'Apple iPhone8 全网通4G手机亮色32G',
        productDesc: '121',//商品描述
        score: 1,
        priceSnapshot: '5000.00',
        startTime: '2018-05-21 11:56:09',//开奖时间
        endTime: '05-12 02:10',//结束时间
      },
      {
        "awardId": 8,
        "productPic": 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        "productTitle": "测试商品标题",
        "productDesc": "测试商品描述",
        "score": 50,
        "priceSnapshot": 99.99,
        "startTime": "2018-05-21 17:56:40",
        "endTime": "2018-05-18 02:10:01",
        "awardType": 1,
        "isParticipated": true,
        "isWinning": false,
        "shareLink": null,
        "status": 1
      },
      {
        "awardId": 8,
        "isClosed": false,
        "productPic": 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        "productTitle": "测试商品标题",
        "productDesc": "测试商品描述",
        "score": 50,
        "priceSnapshot": 99.99,
        "startTime": "2018-05-20 17:56:40",
        "endTime": "2018-05-18 02:10:01",
        "awardType": 1,
        "isParticipated": true,
        "isWinning": true,
        "shareLink": null,
        "status": 2
      },
      {
        "awardId": 9,
        "isClosed": false,
        "productPic": 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        "productTitle": "测试商品标题",
        "productDesc": "测试商品描述",
        "score": 50,
        "priceSnapshot": 99.99,
        "startTime": "2018-05-20 17:56:40",
        "endTime": "2018-05-18 02:10:01",
        "awardType": 1,
        "isParticipated": true,
        "isWinning": false,
        "shareLink": null,
        "status": 2
      },
      {
        "awardId": 9,
        "isClosed": false,
        "productPic": 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        "productTitle": "测试商品标题",
        "productDesc": "测试商品描述",
        "score": 50,
        "priceSnapshot": 99.99,
        "startTime": "2018-05-20 17:56:40",
        "endTime": "2018-05-18 02:10:01",
        "awardType": 1,
        "isParticipated": false,
        "isWinning": false,
        "shareLink": null,
        "status": 2
      },
    ],
    dialogContent: '当前积分不足，不能参与本次抽奖你可以继续签到积累积分',
    contentStyle: 'font-size: 30rpx;color: #353535;',

    // winModal: '',
    // loseModal: '',
    // signModal: '',
    // customerModal: '',
    // ruleModal: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')  
  },
  onLoad(options) {
    this.toLogin()

    this.winModal = this.selectComponent('#winModal')
    this.loseModal = this.selectComponent('#loseModal')
    this.signModal = this.selectComponent('#signModal')
    this.customerModal = this.selectComponent('#customerModal')
    this.ruleModal = this.selectComponent('#ruleModal')
    this.dialogModal = this.selectComponent('#dialogModal')

    if (this.data.tzgUserInfo && this.data.tzgUserInfo.firstLogin) {
      setTimeout(()=>{  
        this.signModal.signOpen()
      },1000)
    }

    //是否中奖提示
    // this.getAward(16)
    if (options.awardId) {
      this.getAward(options.awardId)
    }

    this.setData({
      awardList: [],
      page: 1,
      isEnd: false
    })
    this.getAwardList()
  },
  onReady() {
  },
  onShow() {
  },
  onPullDownRefresh() {
    this.setData({
      awardList: [],
      page: 1,
      isEnd: false
    })
    this.getAwardList()
  },
  onReachBottom() {
    if (this.data.isEnd) {
      return
    }
    this.setData({
      pageNo: parseInt(this.data.pageNo) + 1
    })
    this.getAwardList();
  },
  onShareAppMessage(res) {
    return {
      title: '推荐淘租公给你，和我一起抽奖吧',
      imageUrl: res.target.dataset.url,
      path: '/pages/lottery_list/lottery_list'
    }
  },
  getAwardList() {
    console.log(JSON.stringify({
      openId: app.globalData.openId,
      pageNo: this.data.pageNo,
      pageSize: this.data.pageSize
    }))
    wx.request({
      url: baseUrl + '/userAward/userAwardList',
      method: 'GET',
      data: {
        openId: app.globalData.openId,
        pageNo: this.data.pageNo,
        pageSize: this.data.pageSize
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        console.log(res)
        wx.stopPullDownRefresh()
        if (res.data.code == 200) {
          if (!res.data.data || !res.data.data.dataList.length) {
            this.setData({  
              isEnd: true
            })
            return
          }
          this.setData({  
            awardList: this.data.awardList.concat(res.data.data.dataList)
          })
        } else {
          wx.showToast({
            title: JSON.stringify(res.data.message),
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        wx.stopPullDownRefresh()
        wx.showToast({
          title: '网络异常，请稍后再试',
          icon: 'loading'
        })
      }
    })
  },
  getAward(awardId) {
    wx.request({
      url: baseUrl + '/userAward/viewUserAwardCondition',
      method: 'POST',
      data: {
        openId: app.globalData.openId,
        awardId: awardId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        if (res.data.code == 200) {
          if (res.data.data.winningStatus == 2) {
            this.setData({
              'winTip.title': '恭喜你抽中了' + res.data.data.productName
            })
            setTimeout(() => {
              this.winModal.openModal()
            }, 1000)
          } else if (res.data.data.winningStatus == 1) {
            setTimeout(() => {
              this.loseModal.openModal()
            }, 1000)
          } else {
            this.setData({
              'winTip.title': '恭喜你抽中了' + res.data.data.productName
            })
            setTimeout(() => {
              this.winModal.openModal()
            }, 1000)
          }
        } else {
          wx.showToast({
            title: JSON.stringify(res.data.message),
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络异常，请稍后再试',
          icon: 'loading'
        })
      }
    })
  },
  joinAward(e) {
    //积分不足
    if (e.detail.target.dataset.score > this.data.tzgUserInfo.integral) {
      this.dialogModal.onShow()
      return
    }

    wx.request({
      url: baseUrl + '/userAward/joinAward',
      method: 'POST',
      data: {
        openId: app.globalData.openId,
        id: e.detail.target.dataset.id,
        formId: e.detail.formId,
        pageUrl: '/pages/lottery_list/lottery_list?awardId=' + e.detail.target.dataset.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        console.log(res)
        if (res.data.code == 200) {
          this.toLogin()
          wx.showToast({
            title: '参与抽奖成功',
            icon: 'none'
          })
        } else if (res.data.code == 1006) {//未授权登录
        } else {
          wx.showToast({
            title: JSON.stringify(res.data.message),
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络异常，请稍后再试',
          icon: 'loading'
        })
      }
    })
  },
  onGotUserInfo(e) {
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.request({
        url: baseUrl + '/user/addUserInfo',
        method: 'POST',
        data: {
          avatarUrl: app.globalData.userInfo.avatarUrl,
          nickName: app.globalData.userInfo.nickName,
          openId: app.globalData.openId,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          console.log('add:'+ JSON.stringify(res))
          //1010 已授权
          if (res.data.code == 200) { //第一次保存用户信息
            app.globalData.tzgUserInfo = res.data.data
            this.setData({
              userInfo: app.globalData.userInfo,
              tzgUserInfo: app.globalData.tzgUserInfo
            })
          }
        }
      })
    }
  },
  getUserInfo() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        tzgUserInfo: app.globalData.tzgUserInfo
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回  
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          tzgUserInfo: app.globalData.tzgUserInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理  
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            tzgUserInfo: app.globalData.tzgUserInfo
          })
        }
      })
    }
    console.log('lottery_login' + JSON.stringify(this.data.tzgUserInfo))
  },
  toLogin() {
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: baseUrl + '/user/login',
            method: 'GET',
            data: {
              code: res.code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success: (res) => {
              if (res.data.code == 200) {
                app.globalData.openId = res.data.data.openId
                app.globalData.tzgUserInfo = res.data.data
                app.globalData.userInfo = res.data.data

                wx.getUserInfo({
                  success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                      userInfo: res.userInfo,
                      tzgUserInfo: app.globalData.tzgUserInfo
                    })
                  }
                })
              } else if (res.data.code == 1003) { //未授权
                app.globalData.openId = res.data.data

                //<button open-type="openSetting">打开授权设置页</button> 
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  bindPhone() {
    if (!this.data.tzgUserInfo.mobile) {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  },
  serverTap() {
    this.customerModal.serverOpen()
  },
  ruleTap() {
    this.ruleModal.ruleOpen()
  },
  successTap() {
    wx.makePhoneCall({
      phoneNumber: '0571-85180735'
    })
  }
})
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
      context: '0571-8888888',
      leftButton: '取消',
      rightButton: '拨打'
    },
    awardList: [
      {
        awardId: 1,
        // isClosed: false,//是否关闭
        awardType: 1,//抽奖类型
        isParticipated: false, //是否参与
        isWinning: false,//是否中奖
        status: 0,//开奖状态 0未开 1抽奖中 2结束

        shareLink: '',//分享链接
        productPic: 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        productTitle: 'Apple iPhone8 全网通4G手机亮色32GApple iPhone8 全网通4G手机亮色32G',
        productDesc: '121',//商品描述
        score: '3000',
        priceSnapshot: '5000.00',
        startTime: '2018-05-20 17:56:56',//开奖时间
        endTime: '05-12 02:10',//结束时间
      },
      {
        awardId: 1,
        // isClosed: false,//是否关闭
        awardType: 1,//抽奖类型
        isParticipated: false, //是否参与
        isWinning: false,//是否中奖
        status: 0,//开奖状态 0未开 1抽奖中 2结束

        shareLink: '',//分享链接
        productPic: 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        productTitle: 'Apple iPhone8 全网通4G手机亮色32G',
        productDesc: '121',//商品描述
        score: '3000',
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
        "startTime": "2018-05-20 17:56:40",
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
    winModal: '',
    loseModal: '',
    signModal: '',
    ruleModal: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')  
  },
  onLoad(options) {
    console.log('lottery')
    this.winModal = this.selectComponent('#winModal')
    this.loseModal = this.selectComponent('#loseModal')
    this.signModal = this.selectComponent('#signModal')
    this.customerModal = this.selectComponent('#customerModal')
    this.ruleModal = this.selectComponent('#ruleModal')
    
    

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
    
    if (this.data.tzgUserInfo && this.data.tzgUserInfo.firstLogin) {
      setTimeout(()=>{  
        this.signModal.signOpen()
      },800)
    }

    if (options.awardId) {
      //是否中奖提示
      this.winModal.openModal()
      this.loseModal.openModal()


    }

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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '推荐淘租公给你，和我一起抽奖吧',
      imageUrl: '/images/logo.png',
      path: '/pages/lottery_list/lottery_list'
    }
  },
  getAwardList() {
    wx.request({
      url: baseUrl + '/userAward/userAwardList',
      method: 'GET',
      data: {
        openId: app.globalData.openId,
        pageNo: this.data.pageNo,
        pageSize: this.data.pageSize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        wx.stopPullDownRefresh()
        if (res.data.code == 200) {
          if (!res.data.data || !res.data.data.dataList.length) {
            this.setData({  
              isEnd: true
            })
            return
          }
          this.setData({  
            // awardList: this.data.awardList.concat(res.data.data.dataList)
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
  onGotUserInfo(res) {
    console.log(res)
  },
  joinAward(e) {
    //积分不足
    if (e.detail.target.dataset.score > this.data.tzgUserInfo.integral) {

    }

    wx.request({
      url: baseUrl + '/userAward/joinAward',
      method: 'POST',
      data: {
        openId: app.globalData.openId,
        id: e.detail.target.dataset.id,
        formId: e.detail.formId,
        pageUrl: '/pages/lottery_list/lottery_list'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.data.code == 200) {
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
  toLogin() {
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: 'https://api.taozugong.com/award/user/login',
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
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  serverTap() {
    this.customerModal.serverOpen()
  },
  ruleTap() {
    // this.ruleModal.open()
  }
})
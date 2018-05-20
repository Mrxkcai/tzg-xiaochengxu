const app = getApp()
const baseUrl = getApp().globalData.baseUrl
Page({
  data: {
    tzgUserInfo: '',
    userInfo: '',
    winVisible: false,
    winTip: {
      title: '恭喜你抽中了雅萌瘦脸射频美颜仪',
      contentList: ['请确保绑定好手机号，客服会第一时间联系你', '你也可以主动联系客服']
    },
    loseTip: '好可惜，差点就中了呢，再试试吧',
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
        productTitle: 'Apple iPhone8 全网通4G手机亮色32G',
        productDesc: '121',//商品描述
        score: '3000',
        priceSnapshot: '5000.00',
        startTime: '05月12日02:10',//开奖时间
        endTime: '05-12 02:10',//结束时间
      },
      {
        "awardId": 8,
        "productPic": 'http://img.taozugong.com/product/2018-05-04/88d8afabfDm8jS@!p_mass_90_size_750',
        "productTitle": "测试商品标题",
        "productDesc": "测试商品描述",
        "score": 50,
        "priceSnapshot": 99.99,
        "startTime": "05-18 02:10",
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
        "startTime": "05-18 02:10",
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
        "startTime": "05-18 02:10",
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
        "startTime": "05-18 02:10",
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
    canIUse: wx.canIUse('button.open-type.getUserInfo')  
  },
  onLoad(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
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
            hasUserInfo: true
          })
        }
      })  
    }  
    
    this.getAwardList()
  },
  onReady() {
    this.winModal = this.selectComponent('#winModal')
    this.loseModal = this.selectComponent('#loseModal')
    this.signModal = this.selectComponent('#signModal')
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
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
      // dataType: 'json',
      data: {
        openId: '111',
        pageNo: 1,
        pageSize: 10,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.data.code == 200) {
          this.setData({  
            // awardList: res.data.data.dataList
          })
        }
      }
    })
  },
  openModal() {
    this.winModal.openModal()
    // this.loseModal.openModal()
  },
  onGotUserInfo(res) {
    console.log(res)
  },
  joinAward(e) {
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
        }
      }
    })
  },
  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  sign() {
    this.signModal.signOpen()
  }
})
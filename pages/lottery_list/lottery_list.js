const openId = getApp().globalData.openId
const baseUrl = getApp().globalData.baseUrl
Page({
  data: {
    winVisible: false,
    winTip: {
      title: '恭喜你抽中了雅萌瘦脸射频美颜仪',
      contentList: ['请确保绑定好手机号，客服会第一时间联系你', '你也可以主动联系客服']
    },
    loseTip: '好可惜，差点就中了呢，再试试吧',
    awardList: [
      {
        awardId: 1,
        isClosed: false,//是否关闭
        awardType: 1,//抽奖类型
        isParticipated: false, //是否参与
        isWinning: false,//是否中奖
        status: 1,//开奖状态 1未开 2抽奖中 3结束

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
        "status": 3
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
        "status": 3
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
        "status": 3
      },
    ],
    winModal: '',
    loseModal: ''
  },
  onLoad(options) {
    this.getAwardList()
    // this.getAuthCode()
  },
  onReady() {
    this.winModal = this.selectComponent('#winModal')
    this.loseModal = this.selectComponent('#loseModal')
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
      path: ''
    }
  },
  getAuthCode() {
    wx.request({
      url: baseUrl + '/sms/verifyMobile',
      method: 'POST',
      data: {
        openId: '111',
        mobile: '15276287105',
        authCode: '1234',
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
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
  joinAward() {
    wx.request({
      url: baseUrl + '/userAward/joinAward',
      method: 'POST',
      data: {
        openId: '111',
        id: 1,
        formId: 10,
        pageUrl: 'lottery_list'
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
  login() {
    wx.request({
      url: baseUrl + '/user/login',
      method: 'GET',
      data: {
        code: '',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.data.code == 200) {
          this.setData({
          })
        }
      }
    })
  },
  formSubmit(e) {
    console.log(e)
  }
})
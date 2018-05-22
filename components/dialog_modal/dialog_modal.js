
  Component({
    options:{
      multipleSlots:true //在组件定义时的选择中启用多slot支持
    },
    data:{
      show:false,
      animationData: {},
      checkOpacity:1
    },
    properties: {
     content: {
        type:String,
        value:"绑定成功"
      },
      buttonTitle:{
        type:String,
        value:"知道了"
      },
      contentStyle: {
        type: String,
        value: ''
      }
    },
    methods: {
      //点击“知道了”关闭对话框
      success() {
        this.sknowEvent()
        this.triggerEvent('success')
      },
      sknowEvent() {
        wx.navigateTo({
          url: '../lottery_list/lottery_list',
        });
        this.animation.opacity(0).step()
        this.setData({
          animationData: this.animation.export()
        })
        setTimeout(() => {
          this.setData({
            show: false
          })
        }, 200)
      },
      onShow() {
        this.setData({
          show: true
        })
        var animation = wx.createAnimation({
          duration: 200,
          timingFunction: 'ease',
        })
        this.animation = animation
        animation.opacity(1).step()
        this.setData({
          animationData: animation.export()
        })
      }
    }
  })
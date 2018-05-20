
  Component({
    options:{
      multipleSlots:true //在组件定义时的选择中启用多slot支持
    },
    data:{
      show:true,
      animationData: {},
      checkOpacity:1
    },
    properties: {
     login_title: {
        type:String,
        value:"绑定成功"
      },
      login_know:{
        type:String,
        value:"知道了"
      }
    },
    methods: {
      //点击“知道了”关闭对话框
      sknowEvent: function () {
        var animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'ease',
        })
        this.animation = animation
        animation.opacity(0).step()
        this.setData({
          animationData: animation.export()
        })
        setTimeout(function () {
          animation.opacity(0).step()
          this.setData({
            animationData: animation.export()
          })
        }.bind(this), 1000)
        // this.setData({
        //   show: !this.data.show
        // })
      },
      onShow: function () {
        var animation = wx.createAnimation({
          duration: 1000,
          timingFunction: 'ease',
        })
        this.animation = animation
        animation.opacity(0).step()
        this.setData({
          animationData: animation.export()
        })
        setTimeout(function () {
          animation.opacity(0.1).step()
          this.setData({
            animationData: animation.export()
          })
        }.bind(this), 1000)
      }
    }
  })
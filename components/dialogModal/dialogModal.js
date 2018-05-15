
  Component({
    options:{
      multipleSlots:true //在组件定义时的选择中启用多slot支持
    },
    data:{
      show:true
    },
    methods: {
      //点击“知道了”关闭对话框
      sknowEvent: function () {
        this.setData({
          show: !this.data.show
        })
    }
    }
  })
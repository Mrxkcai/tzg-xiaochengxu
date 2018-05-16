//index.js
//获取应用实例
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data:{
    img: "../../images/rule_logo.png",
    imges: "../../images/relu_copy.png",
    title: "活动规则",
    fail: true
  },
  methods:{
    ruleClose: function () {
      this.setData({
        fail: !this.data.fail
      })
    }
  }
})

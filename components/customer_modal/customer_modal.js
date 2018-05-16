Component({
  options:{
    multipleSlots: true 
  },
  data:{
    cancel: true
  },
  methods:{
    serverCancel: function () {
      this.setData({
        cancel: !this.data.cancel
      })
    },
  }
})
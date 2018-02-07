//index.js
//获取应用实例
const app = getApp()
var flag = true;

// 工具版本 V1.02.1802021
Page({
  data: {
    mycolor: "mytext",
    motto: '欢迎语~~~',
    mytip:'自定义的一句话',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // 点击事件
  click: function () {
    console.log("点击了文字");
    if (flag) {
      app.globalData.mycolor = "mytext-black";
      flag = false;
    } else {
      app.globalData.mycolor = "mytext";
      flag = true;
    }
    this.setData({
      mycolor: app.globalData.mycolor
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
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
  },
  onReady:function(){
    // 页面渲染完成
    console.log("index onReady")
  },
  onShow: function(){
    // 页面显示
    console.log("index onShow")
  }, 
  onHide: function(){
    // 页面隐藏
    console.log("index onHide")
  },
  onUnload: function(){
    // 页面关闭
    console.log("index onUnload")
  },
  onPullDownRefresh: function(){
    // 下拉刷新
    console.log("index onPullDownRefresh")
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

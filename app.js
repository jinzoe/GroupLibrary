//app.js
var config = require("/config.js")

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息，不重要，仅获得头像昵称
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

      // 登录，重要，得到用户唯一标识以及在数据库中的资料
      var that = this
      wx.login({
        success: function (res) {
          if (res.code) {
            // 发起网络请求(自己的服务器)
            wx.request({
              url: 'https://ruancaitong.club/rest/getOpenId?',
              data: {
                code: res.code
              },
              //             
              success : function(res){     
                that.globalData.openid = res.data.openid;
                  //session_key
                  //group是否属于某组织
                  //isLeader是否是leader

              }
            })
            
            that.globalData.isLogin = true;

            // if (that.loginReadyCallback) {
            //   that.loginReadyCallback(//res//)
            // }
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
  },


  globalData: {
    userInfo: null,
    openid: '',
    group: null,
    isLogin: false
  }
})

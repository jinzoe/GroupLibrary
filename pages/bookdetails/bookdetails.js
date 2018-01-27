var app = getApp();

Page({
  data: {
    userinfo : "",
    bookinfo : ""
  },

  // 加载，获取图书、用户信息 
  onLoad: function (options) {
    var bookid = options.id;
    this.setData({
      title: "book" + bookid,   //del,通过id获取info
      bookinfo: ""
    });
    wx.getUserInfo({
      success: function (res) {
        app.globalData.userInfo = res.userInfo;
      }
    })
  },
  //picker日期变化
  bindDateChange: function (e) {
    var date = e.detail.value;
    this.setData({
      date: date
    });
    
    wx.showModal({
      title: '弹窗标题',
      content: '用户' + app.globalData.userInfo.nickName + '在' + date + '前归还' ,
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击确认')
        } else {
          console.log('用户点击取消')
        }
      }
    });
  },
  borrow: function () {
    wx.showToast({
      title: '请确认归还时间',
      // icon: '',
      duration: 1000
    })
  },
  preorder: function () {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
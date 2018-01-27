
Page({
  data: {
    isLoading: false,
    bookdetailvisible: "hidden"
  },
  
  onLoad: function (options) {
    this.setData({
      isLoading: true
    });
    if (!options.isbn) {
      //扫码获取isbn
      wx.scanCode({
        success: (res) => {
          this.doubanTrans(res.result)
        },
        fail: () => {
          this.setData({
            isLoading: false
          });
          this.setData({ errorinfo: "Fail to read" });
        }
      })
    }else{
      //已传入isbn
      this.doubanTrans(options.isbn)
    }
  },
  //通过isbn从豆瓣获取图书信息
  doubanTrans: function (isbn) {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/book/isbn/' + isbn,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data);
        if (!res.data.msg) {
          that.setData({
            bookinfo: res.data,
            bookdetailvisible: "visible"
          })
        } else {
          that.setData({
            errorinfo: "Sorry! No results"
          })
        }
      },
      fail: function () {
        that.setData({
          errorinfo: "Sorry! No results"
        })
      },
      complete: () => {
        this.setData({
          isLoading: false
        });
      }
    });

  }
})
Page({
  data: {
    inputShowed: true,
    inputVal: "",
    booklist: [{
      "author": "Aauthor",
      "title": "Atitle",
      "id" : 1,
      "image": "http://www.pixempire.com/images/preview/list-menu-icon.jpg"
    }, {
      "author": "Bauthor",
      "title": "Btitle",
      "id": 2,
      "image": "http://www.pixempire.com/images/preview/list-menu-icon.jpg"
    }, {
      "author": "Cauthor",
      "title": "Ctitle",
      "id": 3,
      "image": "http://www.pixempire.com/images/preview/list-menu-icon.jpg"
    }]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});
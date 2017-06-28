// putdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
    {
      tag:'tejia',
      name:'糖醋排骨',
      price:'34.0',
      imgurl:'https://github.com/wechat/Chart.js/blob/master/site/assets/html.png?raw=true'

    }, {
      tag: 'tejia',
      name: '红烧肉',
      price: '24.0',
      imgurl: 'https://github.com/wechat/Chart.js/blob/master/site/assets/html.png?raw=true'

    },{
      tag: 'tuijian',
      name: '毛血旺',
      price: '38.0',
      imgurl: 'https://github.com/wechat/Chart.js/blob/master/site/assets/html.png?raw=true'

    },{
      tag: 'tuijian',
      name: '麻辣小龙虾',
      price: '49.0',
      imgurl: 'https://github.com/wechat/Chart.js/blob/master/site/assets/html.png?raw=true'

    },{
      tag: 'tuijian',
      name: '回锅肉',
      price: '34.0',
      imgurl: 'https://github.com/wechat/Chart.js/blob/master/site/assets/html.png?raw=true'

    },{
      tag: 'tejia',
      name: '烤鱼',
      price: '59.0',
      imgurl: 'https://github.com/wechat/Chart.js/blob/master/site/assets/html.png?raw=true'

    }
  ]},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  putdata:function(){
    wx.request({
      url: 'https://api.wxappclub.com/put',
      data: {
        appkey: '8ate68s9tyyk8bswng9xfnfaf01bchs5',
        key: "1_fooddetail",
        value: this.data.menu
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
      }
    });
  }

})
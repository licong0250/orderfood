// fooddetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fooddetaillist:[
      {
        id: 1,
        name:"土豆炖排骨",
        ingred:['土豆','排骨','料酒','盐']
      },
      {
        id: 2,
        name: "糖醋排骨",
        ingred: ['糖', '排骨', '料酒', '醋']
      },
      {
        id: 3,
        name: "红烧牛肉",
        ingred: ['牛肉', '酱油', '料酒', '盐','糖']
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options.id);
    this.setData({
      ids:options.id
    });
   
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady" + this.id);
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:"+this.id);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide:" + this.id);
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
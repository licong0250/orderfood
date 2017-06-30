// shop.js
var util = require('../../utils/getdata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopid: '',
    headImgUrls:''
    ,
    menu: [],
    fooddetail:[
    ],
    tag: 'tuijian',
    numbers:0,
    pee:0.0,
    foodlist:Array(),
    showModalStatus: false,
    selected:'',
    isnewfood:true
  },
  /**
  },
 
  /**
   * 菜单信息,
   */

  clickmenu: function (options){
    
    var that = this;
    that.setData({
      tag: options.target.id,
      selected: options.target.id
    })
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      shopid: options.shopid,
      selected:'tuijian'
    });
    
    // 通过shopid获取对应商铺的菜单信息
    that.getImgUrl();
    

  },
  getImgUrl: function () {
    var that = this;
    var shopid = that.data.shopid;
    var key1 = shopid + '_headImgUrls';
    var key2 = shopid + '_menu';
    var key3 = shopid + '_fooddetail'
    util.getdata(key1,function(res){
      if (res.data.success) {
        console.log("111111")
        that.setData({
          headImgUrls: res.data.result.value
        })
      }
    });
    util.getdata(key2, function (res) {
      if (res.data.success) {
        console.log("22222222")
        that.setData({
          menu: res.data.result.value
        })
      }
    });
    util.getdata(key3, function (res) {
      if (res.data.success) {
        console.log("3333333")
        that.setData({
          fooddetail: res.data.result.value,
        })
      }
    });
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
  /**
  * 点菜
  */
  addfood:function(options){
    var that = this;
    var price = options.target.id;
    var tempnum = that.data.numbers+1;
    
    var foodname = options.currentTarget.dataset.foodname;
    var foodimg = options.currentTarget.dataset.foodimg;
    var foodcount = options.currentTarget.dataset.count+1;
    var prices = (parseFloat(that.data.pee) + parseFloat(price)).toFixed(1);

    var foodlisttemp = that.data.foodlist;
    that.setData({isnewfood: true})
    for (var i = 0; i < foodlisttemp.length; i++) {
      if (foodlisttemp[i].name == foodname) {

        foodlisttemp[i].count += 1;
        that.setData({
          isnewfood:false,
          numbers: tempnum,
          pee: prices,
          foodlist: foodlisttemp
        })
        
        break;
      }
    } 
    if (that.data.isnewfood){
      var foodlisttemp1 = {
        name: foodname,
        imgurl: foodimg,
        price: price,
        count: foodcount
      }

      that.setData({
        numbers: tempnum,
        pee: prices,
        foodlist: that.data.foodlist.concat(foodlisttemp1)
      });
    }
    var foodlisttemps = that.data.foodlist;
    var fooddetailtemp = that.data.fooddetail;
    for (var j = 0; j < foodlisttemps.length; j++) {
      //更新数量
      
      for (var i = 0; i < fooddetailtemp.length; i++) {
        if (fooddetailtemp[i].name == foodlisttemps[j].name) {

          fooddetailtemp[i].count = foodlisttemps[j].count;
          that.setData({
            fooddetail: fooddetailtemp
          })

        }
      } 
    } 
    
  },

/**
 * 删除
 */
  deletefood: function (options){
    var that = this;
    var price = options.target.id;
    var tempnum = that.data.numbers - 1;
    var prices = (parseFloat(that.data.pee) - parseFloat(price)).toFixed(1);
    var foodname = options.currentTarget.dataset.foodname;
    var foodimg = options.currentTarget.dataset.foodimg;
    var foodcount = options.currentTarget.dataset.count;
    var foodlisttemp = that.data.foodlist;
    
    
    for (var i = 0; i < foodlisttemp.length;i++){
      if (foodlisttemp[i].name == foodname){
        
        
        foodcount--;
        foodlisttemp[i].count = foodcount;
        // foodlisttemp.splice(i, 1);
        if (foodcount == 0) {

          foodlisttemp.splice(i, 1);
        }
        break;
      }
    } 
    
    that.setData({
      numbers: tempnum,
      pee: prices,
      foodlist: foodlisttemp
    });
    var foodlisttemps = that.data.foodlist;
    var fooddetailtemp = that.data.fooddetail;
    
      //更新数量
      for (var i = 0; i < fooddetailtemp.length; i++) {
        if (fooddetailtemp[i].name == foodname) {

          fooddetailtemp[i].count = foodcount;
          that.setData({
            fooddetail: fooddetailtemp
          })
          break;
        }
      
    } 
  },

 showfooddetail:function(){
    var that = this;
    
    that.setData({
      showModalStatus:true
    })
 },
 showModal: function () {
   // 显示遮罩层
   var animation = wx.createAnimation({
     duration: 200,
     timingFunction: "linear",
     delay: 0
   })
   this.animation = animation
   animation.translateY(300).step()
   this.setData({
     animationData: animation.export(),
     showModalStatus: true
   })
   setTimeout(function () {
     animation.translateY(0).step()
     this.setData({
       animationData: animation.export()
     })
   }.bind(this), 200)
 },
 hideModal: function () {
   // 隐藏遮罩层
   var animation = wx.createAnimation({
     duration: 200,
     timingFunction: "linear",
     delay: 0
   })
   this.animation = animation
   animation.translateY(300).step()
   this.setData({
     animationData: animation.export(),
   })
   setTimeout(function () {
     animation.translateY(0).step()
     this.setData({
       animationData: animation.export(),
       showModalStatus: false
     })
   }.bind(this), 200)

 }
});


//引用百度地图微信小程序jsapi模块
var bmap=require('../../libs/bmap-wx.js');
var wxMarkerData=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  markers:[],
	  latitude:'',
	  longitude:'',
	  placeData:{title:'点击图上marker获取详细信息'},
	  searchMethod:'酒店',
	  bitmap:'',
	  fail:'',
	  success:'',
	  selsectState:[1,0,0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that=this;
		//新建百度地图对象
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
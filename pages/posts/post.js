// var postsData = require('../../data/post-data.js')

Page({
  data:{
  },
  progress:function(){

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
      var posts_content = {"post_key":[
          {
              date: "Sep 18 2016",
              title: "正是虾肥蟹壮时",
              img: {
                  imgSrc: "/images/post/banner.jpg",
                  avatar: "/images/avater.jpg",
                  headImgSrc: "/images/avater.jpg",
              },
              hasImage: true,
              content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
              reading: "112",
              collection: "96",
          },
          {
              date: "Nov 20 2016",
              title: "比利·林恩的中场故事",
              img: {
                  imgSrc: "/images/post/banner.jpg",
                  avatar: "/images/avater.jpg",
                  headImgSrc: "/images/avater.jpg",
              },
              hasImage: false,
              content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
              reading: "62",
              collection: "92",
          },
          {
              date: "Sep 18 2016",
              title: "正是虾肥蟹壮时",
              img: {
                  imgSrc: "/images/post/banner.jpg",
                  avatar: "/images/avater.jpg",
                  headImgSrc: "/images/avater.jpg",
              },
              hasImage: true,
              content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
              reading: "112",
              collection: "96",
          }
      ]};
    this.setData(posts_content);
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("onReady");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("onShow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("onHide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onUnload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("onPullDownRefresh");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("onReachBottom");
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})
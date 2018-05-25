//app.js
/**
 * 当程序初始化完成时，会出发onLaunch(全局只出发一次)
 * JH514a30b525f167f09238d537f5fa0948
 */
App({
  onLaunch: function () {
    
  },
  globalData: {
    defaultCity:'',
    defaultCounty:'',
    weatherData:'',
    air:'',
    day:'',
    g_isPlayingMusic:false,
    g_currentMusicPosID:null,
    doubanBase:"https://api.douban.com",
    heWeatherBase:"https://free-api.heweather.com",
    juhetoutiaoBase:"https://v.juhe.cn/toutiao.index",
    tencentMapKey:"6KCBZ-O4O63-BAN3C-Y6UDZ-GCTOZ-FFBNN",
    heWeatherKey:"01597dd210c240acab49b55a68dd91b9",
    juhetoutiaoKey:"30a527fd1f883c8f366f2d449bac2bb6",
    curBook:""
  }
})
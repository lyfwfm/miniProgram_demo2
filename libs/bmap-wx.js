/**
 * 百度地图微信小程序API类
 */
class BMapWX{
  constructor(param){
    this.ak=param["ak"];
  }

  /**
   * 使用微信接口进行定位
   * @param {string} type 坐标类型
   * @param {Function} success 成功执行
   * @param {Function} fail 失败
   * @param {Function} complete 完成后执行
   */
  getWXLocation(type,success,fail,complete){
    type = type || 'gcj02',
    success = success || function(){};
    fail = fail || function(){};
    complete = complete || function(){};
    wx.getLocation({
      type:type,
      success:success,
      fail:fail,
      complete:complete
    });
  }

  /**
   * POI周边检索
   * @param {Object} param 检索配置
   * 参数对象结构可以参考
   * http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi
   */
  search(param){
    var that = this;
    param = param || {};
    let searchParam={
      query:param["query"] || '生活服务$美食&酒店',
      scope:param["scope"] || 1,
      filter:param["filter"] || '',
      coord_type:param["coord_type"]||2,
      page_size:param["page_size"] || 10,
      page_num:param["page_num"] || 0,
      output:param["output"]||'json',
      ak:that.ak,
      sn:param["sn"]||'',
      timestamp:param["timestamp"]||'',
      radius:param["radius"]||2000,
      ret_coordtype:'gcj02ll'
    };
    let otherparam={
      iconPath:param["iconPath"],
      iconTapPath:param["iconTapPath"],
      width:param["width"],
      height:param["height"],
      alpha:param["alpha"]||1,
      success:param["success"]||function(){},
      fail:param["fail"]||function(){}
    };
    let type = 'gcj02';
    let locationSuccess=function(result){
      searchParam["location"]=result["latitude"]+','+result["longitude"];
      wx.request({
        url: 'https://api.map.baidu.com/place/v2/search',
        data:searchParam,
        header:{
          "content-type":"application/json"
        },
        method:'GET',
        success(data){
          let res = data["data"];
          if(res["status"===0]){
            let poiArr = res["results"];
            //outputRes 包含两个对象,
            //originalData为百度接口返回的原始数据
            //wxMarkerData为小程序规范的marker格式
            let outputRes = {};
            outputRes["originalData"]=res;
            outputRes["wxMarkerData"]=[];
            for(let i=0;i<poiArr.length;i++){
              outputRes["wxMarkerData"][i]={
                id:i,
                latitude:poiArr[i]["location"]["lat"],
                longitude:poiArr[i]["location"]["lng"],
                title:poiArr[i]["name"]
              }
            }
          }
        }
      })
    }
  }
}
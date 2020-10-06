import {config} from '../config'

class request {

  request(params){
    return new Promise((resolve,reject)=>{
      this._request(params,resolve,reject)
    })
  }

  _request(params,resolve,reject){
    wx.request({
      ...params,
      url: config.api_base_url + params.url,
      header:{
        "content-type": "application/json",
        "appkey": config.appkey
      },
      success:(res)=>{
        resolve(res)
      },
      fail:(error)=>{
        reject(error)
      }
    })
  }
}

export {request}
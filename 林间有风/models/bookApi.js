import {
  request
} from '../utils/request'

class http extends request {
  async getBook() {
    return await this.request({
      url: "/book/hot_list",
      method: 'Get',
    })
    
    // return this.request({
    //   url: "/book/hot_list",
    //   method: 'Get',
    // })
  }
}

export {
  http
}
import { observable, action } from "mobx"
import request from '../util/request'

class AppStore {
  @observable msg = ''

  constructor() {
    request('/hello').then(action(data => {
      this.msg = data.helloMsg
    }))
  }
}

export default new AppStore()

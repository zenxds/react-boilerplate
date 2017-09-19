import { observable, action } from "mobx"
import request from '../util/request'

class AppStore {
  @observable msg = ''
}

export default new AppStore()

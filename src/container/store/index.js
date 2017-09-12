import { observable, action, runInAction } from "mobx"
import * as actions from '../../action'

class Store {
  @observable msg = ''

  constructor() {
    this.getHelloMsg()
  }

  getHelloMsg() {
    actions.getHelloMsg().then(data => {
      runInAction(() => {
        this.msg = data.helloMsg
      })
    })
  }
}

export default new Store()

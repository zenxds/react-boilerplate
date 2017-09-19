import { action } from 'mobx'
import request from '../util/request'
import store from './appStore'

class Action {
  constructor(store) {
    this.store = store
  }

  getMsg = () => {
    request('/hello').then(action(data => {
      this.store.msg = data.helloMsg
    }))
  }
}

export default new Action(store)

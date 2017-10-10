import { action } from 'mobx'
import request from 'util/request'
import store from './appStore'

class Action {
  constructor(store) {
    this.store = store
  }

  getMsg = () => {
    request('/hello').then(data => {
      this.merge({
        msg: data.helloMsg
      })
    })
  }

  @action
  merge = (obj={}) => {
    Object.assign(this.store, obj)
  }
}

export default new Action(store)

import { action } from 'mobx'
import { get } from 'util/request'
import store from './appStore'

class Action {
  constructor(store) {
    this.store = store
  }

  getMsg() {
    get('/hello').then(data => {
      this.merge({
        msg: data.helloMsg
      })
    })
  }

  @action.bound
  merge(obj={}) {
    Object.assign(this.store, obj)
  }
}

export default new Action(store)

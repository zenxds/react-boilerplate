import { createActions } from 'redux-actions'
import * as apis from '../constant/api'
import request from '../util/request'

const actions = createActions({
  getHelloMsg: () => {
    return request(apis.helloMsg)
  }
})

export default actions
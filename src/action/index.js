import { createActions } from 'redux-actions'
import * as apis from '../constant/api'
import request from '../util/request'

export const getHelloMsg = () => {
  return request(apis.helloMsg)
}

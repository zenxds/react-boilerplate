import { createActions } from 'redux-actions'
import * as apis from '../constant/api'
import request from '../util/request'

const actions = createActions({
  getData: () => {
    return request(apis.data)
  }
})

export default actions
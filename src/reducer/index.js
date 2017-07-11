import { handleActions } from 'redux-actions'
import actions from '../action'
import { fromJS } from 'immutable'

const reducer = handleActions({
  [actions.getHelloMsg]: (state, action) => {
    if (action.error) {
      return state
    }

    return state.merge(action.payload)
  }
}, fromJS({

}))

export default reducer

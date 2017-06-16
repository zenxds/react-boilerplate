import { handleActions } from 'redux-actions'
import actions from '../action'

const reducer = handleActions({
  [actions.getData]: (state, action) => {
    if (action.error) {
      return state
    }

    return {
      ...state,
      ...action.payload
    }
  }
}, {

})

export default reducer

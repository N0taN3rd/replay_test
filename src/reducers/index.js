import { combineReducers } from 'redux-immutable'
import fetchReducer from './fetchReducer'

const rootReducer = combineReducers({
  fetchState: fetchReducer
})

export default rootReducer
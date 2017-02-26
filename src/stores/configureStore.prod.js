import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { ipc, requestHandler } from '../middleware'
import rootReducer from '../reducers'

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware)
)

export default configureStore

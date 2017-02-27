import { combineReducers } from 'redux-immutable'
import { filterActions } from 'redux-ignore'
import fetchGet, { fetchLocalIm } from './fetchReducer'
import swReducers from './swReducer'
import constants from '../constants'

const {swInstallReducer, swMessageReducer, swNetworkMessageReducer} = swReducers

const {ServiceWorker, FetchGet} = constants
const installActions = ['@@INIT', ServiceWorker.SW_INSTALL_COMPLETE, ServiceWorker.INSTALL_SW, ServiceWorker.INSTALL_SW_CANNOT, ServiceWorker.SW_INSTALL_FAILED]
const swMessageActions = ['@@INIT', ServiceWorker.RECEIVED_SW_DM, ServiceWorker.RECEIVED_SW_MESSAGE]

// const rootReducer = combineReducers({
//   fetchState: fetchGet,
//   swInstallState: filterActions(swInstallReducer, installActions),
//   swMessageState: filterActions(swMessageReducer, swMessageActions),
//   swNetworkMessageState: filterActions(swNetworkMessageReducer, [ServiceWorker.GOT_NETWORK_MESSAGE])
// })

const rootReducer = combineReducers({
  fetchState: fetchGet,
  fetchLIState: fetchLocalIm,
  swInstallState: swInstallReducer,
  swMessageState: swMessageReducer,
  swNetworkMessageState: swNetworkMessageReducer
})

export default rootReducer
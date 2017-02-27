import constants from '../constants'

const {ServiceWorker} = constants

export const installSW = () => ({type: ServiceWorker.INSTALL_SW})

export const installSWCannot = report => ({type: ServiceWorker.INSTALL_SW_CANNOT, report})
export const installSWFAILED = (report, err) => ({type: ServiceWorker.SW_INSTALL_FAILED, err, report})
export const startListeningSW = () => ({type: ServiceWorker.LISTEN_FOR_SWM})
export const sendSW_Message = message => ({type: ServiceWorker.SEND_SW_MESSAGE, message})
export const sendSW_DM = message => ({type: ServiceWorker.SEND_SW_DM, message})
export const installSWComplete = report => dispatch => {
  dispatch(startListeningSW())
  dispatch({type: ServiceWorker.SW_INSTALL_COMPLETE, report})
}
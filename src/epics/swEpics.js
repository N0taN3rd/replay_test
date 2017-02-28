import { Observable } from 'rxjs'
import Promise from 'bluebird'
import constants from '../constants'

const {ServiceWorker} = constants
//SEND_SW_MESSAGE, RECEIVED_SW_MESSAGE, SEND_SW_DM

const gotMessage = event => {
  if (event.data.type === 'ack') {
    return {
      type: ServiceWorker.RECEIVED_SW_MESSAGE,
      m: event.data.m
    }
  } else {
    return {
      type: ServiceWorker.GOT_NETWORK_MESSAGE,
      req: event.data.req
    }
  }

}

const gotDM = event => ({
  type: ServiceWorker.RECEIVED_SW_DM,
  wasError: false,
  m: event.data
})

const sendDmError = error => ({
  type: ServiceWorker.RECEIVED_SW_DM,
  wasError: false,
  err: error
})

const doSend = message => new Promise((resolve, reject) => {
  if (navigator.serviceWorker.controller) {
    const swMessageChannle = new MessageChannel()
    swMessageChannle.port1.onmessage = (event) => {
      resolve(event)
    }
    // Send the message
    try {
      navigator.serviceWorker.controller.postMessage({type: 'dm', m: message}, [swMessageChannle.port2])
    } catch (err) {
      reject(err)
    }
  } else {
    reject(new Error('ServiceWorkers can not be sent direct messages'))
  }
})

export const sendMessageEpic = action$ =>
  action$.ofType(ServiceWorker.SEND_SW_DM)
    .mergeMap(action =>
      Observable.fromPromise(doSend(action.message))
        .map(gotDM)
        .catch(sendDmError)
    )

export const startListeningEpic = action$ =>
  action$.ofType(ServiceWorker.LISTEN_FOR_SWM)
    .switchMap(action =>
      Observable.fromEvent(navigator.serviceWorker, 'message')
        .map(event => gotMessage(event))
    )

// export const gotMessageEpic = action$ =>
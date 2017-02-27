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
  m: event.data
})

const doSend = message => new Promise((resolve, reject) => {
  const swMessageChannle = new MessageChannel()
  swMessageChannle.port1.onmessage = (event) => {
    resolve(event)
  }
  // Send the message
  navigator.serviceWorker.controller.postMessage(message, [swMessageChannle.port2])
})

export const sendMessageEpic = action$ =>
  action$.ofType(ServiceWorker.SEND_SW_DM)
    .mergeMap(action =>
      Observable.fromPromise(doSend(action.message))
        .map(event => gotDM(event))
    )

export const startListeningEpic = action$ =>
  action$.ofType(ServiceWorker.LISTEN_FOR_SWM)
    .switchMap(action =>
      Observable.fromEvent(navigator.serviceWorker, 'message')
        .map(event => gotMessage(event))
    )

// export const gotMessageEpic = action$ =>
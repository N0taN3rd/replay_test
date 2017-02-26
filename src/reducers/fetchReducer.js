import Constants  from '../constants'
import { FetchRecord } from '../records'

const {Fetch} = Constants

const fetchReducer = (state = new FetchRecord(), action) => {
  switch (action.type) {
    case Fetch.FETCH_STARTED:
      return state.fetchStarted(action.url)
    case Fetch.FETCH_DONE:
      const {res, body} = action
      return state.fetchDone(res, body)
    case Fetch.FETCH_ERROR:
      const {err} = action
      return state.fetchError(err)
    default:
      return state
  }
}

export default fetchReducer
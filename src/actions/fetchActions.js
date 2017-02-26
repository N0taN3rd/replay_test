import Constants  from '../constants'

const {Fetch} = Constants

const doingFetch = url => ({
  type: Fetch.FETCH_STARTED,
  url
})

export const doFetch = url => dispatch => {
  dispatch(doingFetch())
  return fetch(url).then(response => {
    return response.json().then(json => dispatch(fetchDone(response, json)))
  }).catch(err => dispatch(fetchError(err)))
}

export const fetchDone = (res, body) => ({
  type: Fetch.FETCH_DONE,
  res,
  body
})

export const fetchError = err => ({
  type: Fetch.FETCH_ERROR,
  err
})
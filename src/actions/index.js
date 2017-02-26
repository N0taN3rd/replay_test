import Constants  from '../constants'

const {Fetch} = Constants

const doingFetch = () => ({
  type: Fetch.FETCH_STARTED
})

export const doFetch = url => dispatch => {
  dispatch(doingFetch())
  return fetch(url, {headers: {'upgrade-insecure-requests': 1}}).then(response => {
    console.log(response)
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
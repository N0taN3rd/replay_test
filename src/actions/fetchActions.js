import constants from '../constants'
import Promise from 'bluebird'
const {FetchGet, FetchLocalImage} = constants

export const doFetchGet = url => Promise.delay(3000).then(() => ({
  type: FetchGet.DO_FETCH_GET,
  url
}))

export const doLocalImFetchGet = url => Promise.delay(2000).then(() => ({
  type: FetchLocalImage.DO_FETCH_LOCAL_IMAGE,
  url
}))
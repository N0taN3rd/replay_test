import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import { bindActionCreators } from 'redux'
import { onlyUpdateForKeys, setDisplayName, compose } from 'recompose'
import ListContainer from '../util/listContainer'
import MyAutoSizer from '../util/myAutoSizer'
import CircularProgress from 'material-ui/CircularProgress'
import * as fA from '../../actions/fetchActions'
import numeral from 'numeral'

const stateToProps = state => ({
  fetchState: state.get('fetchState')
})

const dispatchToProps = dispatch => bindActionCreators(fA, dispatch)

const enhance = compose(
  setDisplayName('DoFetch'),
  onlyUpdateForKeys(['fetchState'])
)

//doFetch('https://api.github.com/repos/N0taN3rd/wail')

function* percenter (data) {
  const vals = Array.from(Object.entries(data.toJS()))
  let total = 0
  for (const [l, b] of vals) {
    total += b
  }
  for (const [l, b] of vals) {
    yield {l, p: numeral(b / total).format('0.00%')}
  }
}

const doSum = data => {
  const vals = Array.from(Object.entries(data.toJS()))
  let total = 0
  for (const [l, b] of vals) {
    total += b
  }
  let lis = []
  vals.sort(([a1, a2], [b1, b2]) => {
    if (a2 < b2) {
      return 1
    } else if (a2 > b2) {
      return -1
    } else {
      return 0
    }
  })
  for (const [l, b] of vals) {
    lis.push(<ListItem key={`${l}${b}`} primaryText={`${numeral(b / total).format('0.00%')} ${l}`}/>)
  }
  return lis
}

const DoFetch = (props) => {
  const theUrl = 'https://api.github.com/repos/N0taN3rd/wail/languages'
  if (!props.fetchState.get('done')) {
    props.doFetchGet(theUrl)
    return (<CircularProgress/>)
  } else {
    if (!props.fetchState.get('wasError')) {
      return (
        <MyAutoSizer findElement="rfc">
          {({height}) => (
            <List style={{maxHeight: height - 350, height, overflowY: 'auto'}}
                  children={doSum(props.fetchState.get('body'))}/>
          )}
        </MyAutoSizer>
      )
    } else {
      return (<p>Was Error: {String(props.fetchState.get('err'))}</p>)
    }
  }
}

DoFetch.propTypes = {
  fetchState: PropTypes.object.isRequired,
  doFetchGet: PropTypes.func.isRequired
}

export default connect(stateToProps, dispatchToProps)(enhance(DoFetch))
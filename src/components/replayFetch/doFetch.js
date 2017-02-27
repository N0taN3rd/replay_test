import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onlyUpdateForKeys, setDisplayName, compose } from 'recompose'
import JSONTree from 'react-json-tree'
import CircularProgress from 'material-ui/CircularProgress'
import { doFetchGet } from '../../actions/fetchActions'

const stateToProps = state => ({
  fetchState: state.get('fetchState')
})

const dispatchToProps = dispatch => bindActionCreators({doFetchGet}, dispatch)

const enhance = compose(
  setDisplayName('DoFetch'),
  onlyUpdateForKeys(['fetchState'])
)
//doFetch('https://api.github.com/repos/N0taN3rd/wail')
const DoFetch = (props) => {
  const theUrl = 'https://api.github.com/repos/N0taN3rd/wail'
  if (!props.fetchState.get('done')) {
    props.doFetchGet(theUrl)
    return (<CircularProgress />)
  } else {
    if (!props.fetchState.get('wasError')) {
      return (<div>
        <p>I hope this gets rewritten: {theUrl}</p>
        <JSONTree data={props.fetchState.get('body')}/>
      </div>)
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
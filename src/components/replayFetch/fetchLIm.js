import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import { bindActionCreators } from 'redux'
import { onlyUpdateForKeys, setDisplayName, compose } from 'recompose'
import CircularProgress from 'material-ui/CircularProgress'
import { doLocalImFetchGet } from '../../actions/fetchActions'

const stateToProps = state => ({
  fetchLIState: state.get('fetchLIState')
})

const dispatchToProps = dispatch => bindActionCreators({doLocalImFetchGet}, dispatch)

const enhance = compose(
  setDisplayName('FetchLIm'),
  onlyUpdateForKeys(['fetchLIState'])
)
//doFetch('https://api.github.com/repos/N0taN3rd/wail')
const FetchLIm = (props) => {
  const theUrl = 'wsdlFrog.png'
  if (!props.fetchLIState.get('done')) {
    props.doLocalImFetchGet(theUrl)
    return (<CircularProgress />)
  } else {
    if (!props.fetchLIState.get('wasError')) {
      return (
        <Avatar
          src={URL.createObjectURL(props.fetchLIState.get('body'))}
          size={200}
        />)
    } else {
      return (<p>Was Error: {String(props.fetchLIState.get('err'))}</p>)
    }
  }
}

FetchLIm.propTypes = {
  fetchLIState: PropTypes.object.isRequired,
  doLocalImFetchGet: PropTypes.func.isRequired
}

export default connect(stateToProps, dispatchToProps)(enhance(FetchLIm))
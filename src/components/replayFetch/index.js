import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onlyUpdateForKeys } from 'recompose'
import { doFetch } from '../../actions'
import DoFetch from './doFetch'
import CircularProgress from 'material-ui/CircularProgress'
import JSONTree from 'react-json-tree'

const stateToProps = state => ({
  fetchState: state.get('fetchState')
})

const dispatchToProps = dispatch => bindActionCreators({doFetch}, dispatch)

const enhance = onlyUpdateForKeys(['fetchState'])

class ReplayFetch extends Component {
  render () {
    const {fetchState, doFetch} = this.props
    return (
      <div>
        <DoFetch doFetch={doFetch}/>
        <div>
          {(!fetchState.haveResult && !fetchState.done) && <CircularProgress />}
          {(fetchState.haveResult && fetchState.done) && <JSONTree data={fetchState.result}/>}
        </div>
      </div>
    )
  }
}

ReplayFetch.propTypes = {
  fetchState: PropTypes.object.isRequired,
  doFetch: PropTypes.func.isRequired
}

export default connect(stateToProps, dispatchToProps)(enhance(ReplayFetch))

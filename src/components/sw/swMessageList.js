import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { installSW } from '../../actions/serviceWorkerActions'
import { CardText, CardHeader } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import constants from '../../constants'

const stateToProps = state => ({swMessageState: state.get('swMessageState')})

class SwMesssageList extends Component {

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return this.props.swMessageState !== nextProps.swMessageState
  }

  makeLis () {
    let i = 0, len = this.props.swMessageState.size, messages = []
    if (len === 0) {
      messages.push(<ListItem key={'emptySWMlist'} primaryText='No Messages received from our ServiceWorker :('/>)
    } else {
      for (; i < len; ++i) {
        let aMessage = this.props.swMessageState.get(i)
        messages.push(<ListItem
          key={`${i}+${aMessage.m}`}
          primaryText={aMessage.time.format()}
          secondaryText={`${aMessage.m}`}
        />)
        if (i + 1 < len) {
          messages.push(<Divider key={`${i}+divider`}/>)
        }
      }
    }
    return messages
  }

  render () {
    return (
      <List style={{height: 100, maxHeight: 80, overflowY: 'auto'}}>
        {this.makeLis()}
      </List>
    )
  }

}

SwMesssageList.propTypes = {
  swMessageState: PropTypes.object.isRequired
}

export default connect(stateToProps)(SwMesssageList)
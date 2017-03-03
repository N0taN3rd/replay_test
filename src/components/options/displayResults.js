import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose, onlyUpdateForKeys } from 'recompose'
import axios from 'axios'
import Inspector from 'react-inspector'

const enhance = compose(
  setDisplayName('OptionsResults'),
  onlyUpdateForKeys(['res'])
)

const DisplayResults = ({res}) => (
  <div style={{
    margin: 'auto',
    width: '50%',
    padding: '10px',
  }}>
    <div style={{
      maxHeight: 400,
      overflowY: 'auto',
      height: 400
    }}>
      <Inspector style={{width: 300}} data={res}/>
      <div>
        <p>Displaying the returned HTML sent by github.io</p>
        <div dangerouslySetInnerHTML={{__html: res.data}}/>
      </div>
    </div>
  </div>
)

DisplayResults.propTypes = {
  res: PropTypes.object.isRequired
}

export default enhance(DisplayResults)



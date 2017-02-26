import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const DoFetch = ({doFetch}) => (
  <RaisedButton primary label="do fetch"
                onTouchTap={() => doFetch('https://api.github.com/repos/N0taN3rd/wail')}/>
)

export default DoFetch
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const DoFetch = ({doFetch}) => (
  <RaisedButton primary label="do fetch"
                onTouchTap={() => doFetch('http://memgator.cs.odu.edu:1208/timemap/json/http://cs.odu.edu')}/>
)

export default DoFetch
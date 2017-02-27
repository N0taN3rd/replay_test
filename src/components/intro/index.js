import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardText } from 'material-ui/Card'
import { pure, setDisplayName, compose } from 'recompose'
import IntroText from './introText'
import * as colors from 'material-ui/styles/colors'
const link = 'https://avatars1.githubusercontent.com/u/4416806?v=3&s=200'

const enhance = compose(
  setDisplayName('Intro'),
  pure
)

//Hello, I will be using fetch to retrieve https://api.github.com/repos/N0taN3rd/wail

export default enhance(() => (
  <Card style={{margin: 10}}>
    <CardTitle
      titleColor={colors.white}
      subtitleColor={colors.white}
      style={{backgroundColor: colors.teal700}}
      title='Hello, I will be attempting to make archival and replay fail'/>
    <IntroText/>
  </Card>
))




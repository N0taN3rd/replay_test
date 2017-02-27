import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose } from 'recompose'
import { Flex } from 'react-flex'
import FetchGithubApi from './fetchGithubApi'
import FetchLocalImage  from './anImage'

const enhance = compose(
  setDisplayName('Fetcher'),
  pure
)

const Fetcher = enhance(() => (
  <Card style={{margin: 10}}>
    <CardTitle
      titleColor={colors.white}
      subtitleColor={colors.white}
      style={{backgroundColor: colors.teal700}}
      title='Can We Use Fetch?'
    />
    <Flex row alignItems='center' justifyContent='space-between'>
      <FetchGithubApi/>
      <FetchLocalImage/>
    </Flex>
  </Card>
))

export default Fetcher
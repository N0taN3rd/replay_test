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

const subtitle = (
  <span>
    <a style={{color: colors.amber500}}
       href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch</a> is a&nbsp;
    <a style={{color: colors.amber500}} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> based alternative to XMLHttpRequests (XHR)
    for making HTTP requests via JavaScript. It provides a <a style={{color: colors.amber500}}
    href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch">simpler API</a>, helps to avoid&nbsp;
    <a style={{color: colors.amber500}} href="http://callbackhell.com/">callback hell</a> and has been available since: Chrome 42, Edge 14, Firefox 39, Opera 29, and Safari 10.1
  </span>
)

const Fetcher = enhance(() => (
  <Card style={{margin: 10}}>
    <CardTitle
      titleColor={colors.white}
      subtitleColor={colors.white}
      style={{backgroundColor: colors.teal700}}
      title='Can We Use Fetch?'
      subtitle={subtitle}
    />
    <Flex row alignItems='center' justifyContent='space-between'>
      <FetchGithubApi/>
      <FetchLocalImage/>
    </Flex>
  </Card>
))

export default Fetcher
import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose } from 'recompose'
import { Flex } from 'react-flex'
import InstallSW from './installSW'
import TalkToSw from './talkToSw'
import SwNetworkMesssageList from './swNetworkMessages'

const enhance = compose(
  setDisplayName('ServiceWorker'),
  pure
)

const ServiceWorker = enhance(() => (
  <Card style={{margin: 10}}>
    <CardTitle
      titleColor={colors.white}
      subtitleColor={colors.white}
      style={{backgroundColor: colors.teal700}}
      title='Can We Use A Service Worker?'
      subtitle='Some Sites May Use The Technique'/>
    <Flex row alignItems='center' justifyContent='space-between'>
      <div>
        <InstallSW />
        <TalkToSw />
      </div>
      <div style={{width: '50%'}}>
        <CardHeader  title='The network requests made'/>
        <SwNetworkMesssageList />
      </div>
    </Flex>
  </Card>
))

export default ServiceWorker
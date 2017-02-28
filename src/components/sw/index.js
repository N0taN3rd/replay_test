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

const networkTitle =
  "As a feature of this page we display the HTTP requests made by the Browser and JavaScript driving this page "+
  "as seen by our Service Worker. Hopefully the URLs displayed will be rewritten if viewing an archived copy"

const subtitle = (
  <span>Service Workers allow&nbsp;
    <a style={{color: colors.amber500}}
       href="https://serviceworke.rs/caching-strategies.html">Caching Strategies</a>,&nbsp;
    <a style={{color: colors.amber500}} href="https://serviceworke.rs/web-push.html">Push</a>&nbsp;<a
      style={{color: colors.amber500}}
      href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API">API's</a>,&nbsp;
    <a style={{color: colors.amber500}} href="https://serviceworke.rs/offline.html">Offline
      Detection/Handling</a>,&nbsp;
    <a style={{color: colors.amber500}} href="https://serviceworke.rs/virtual-server.html">Virtual Servers</a>,
    and <a href="https://serviceworke.rs/" style={{color: colors.amber500}}>more</a> to be used by your page without requiring their business
    logic to be included in the main JavaScript logic for your page. Available since: Chrome 40, Firefox 39, Opera 24.
  </span>
)
//https://crossorigin.me/
const ServiceWorker = enhance(() => (
  <Card style={{margin: 10}}>
    <CardTitle
      titleColor={colors.white}
      subtitleColor={colors.white}
      style={{backgroundColor: colors.teal700}}
      title='Can We Use A Service Worker?'
      subtitle={subtitle}/>
    <Flex row alignItems='center' justifyContent='space-between'>
      <div style={{width: '50%', height: 200}}>
        <InstallSW />
        <TalkToSw />
      </div>
      <div style={{width: '50%'}}>
        <CardHeader title={networkTitle}/>
        <SwNetworkMesssageList />
      </div>
    </Flex>
  </Card>
))

export default ServiceWorker
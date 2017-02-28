import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose } from 'recompose'
import { Flex } from 'react-flex'

const enhance = compose(
  setDisplayName('DocumentDomain'),
  pure
)

const subtitle = (
  <span>
     This trick is used to avoid CORS when talking to a CDN or other services on a subdomain/superdomain of the current webpage.
    For more information consider this blog post <a style={{color: colors.amber500}}
                                                  href="http://ws-dl.blogspot.com/2017/01/2017-01-20-cnncom-has-been-unarchivable.html">2017-01-20: CNN.com has been unarchivable since November 1st, 2016</a>
  </span>
)
const canSet = () => {
  const toHideOrNotToHide = {
    margin: 'auto',
    height: 450,
    padding: '10px',
  }
  try {
    window.document.domain = 'n0tan3rd.github.io'
  } catch (err) {
    console.log("I can not set window.document.domain='n0tan3rd.github.io'")
    toHideOrNotToHide.display = 'none'
  }
  return toHideOrNotToHide
}

const DocumentDomain = enhance(() => (
  <Card style={{margin: 10, height: 500}}>
    <CardTitle
      titleColor={colors.white}
      subtitleColor={colors.white}
      style={{backgroundColor: colors.teal700}}
      title='Can I Set window.document.domain="n0tan3rd.github.io"'
      subtitle={subtitle}
    />
    <div style={canSet()}>
      <img style={{
        display: 'block',
        margin: 'auto',
        height: 'auto',
        width: 'auto',
        maxWidth: 450,
        maxHeight: 500,
      }} src="https://i.imgflip.com/1kh9o4.jpg"/>
    </div>
  </Card>
))

export default DocumentDomain
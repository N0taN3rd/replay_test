import React from 'react'
import CardText from 'material-ui/Card/CardText'
import Avatar from 'material-ui/Avatar'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose } from 'recompose'


const enhance = compose(
  setDisplayName('IntroText'),
  pure
)

const reduxLogo = 'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67'

const IntroText = enhance(() => (
  <CardText>
    This site is generated mostly in JS using React &nbsp;
    {<Avatar size={20} src='https://facebook.github.io/react/img/logo.svg'/>}&nbsp;
    {<img style={{height: 20}} src={reduxLogo}/>} &nbsp; and some friends.&nbsp;
    The goal of this page is to test the archival and replay systems
    abilities by throwing some gotchas at them.<br/>There are three versions of this page.
    The first two use standard web practices of code splitting to reduce bundle size:&nbsp;
    {<a style={{color: colors.teal700}} href="https://n0tan3rd.github.io/replay_test/">un-mangled minified JS files</a>} (97.8 kb/1.51 MB) and&nbsp;
    {<a style={{color: colors.teal700}} href="https://n0tan3rd.github.io/replay_test/minifiedTest">mangled minified JS file</a>}&nbsp;(38.3 kb/909 kb).<br/>
    The third version does not and packages everything into a {<a style={{color: colors.teal700}} href="https://n0tan3rd.github.io/replay_test/oneBundle">single JS file bundle</a>}&nbsp;(12.2 MB).
    These three versions were generated to test the ability of JavaScript URL discovery and rewriting which should happen easily no matter the size or state of the contained code.<br/>
  </CardText>
))

export default IntroText

import React from 'react'
import CardText from 'material-ui/Card/CardText'
import Avatar from 'material-ui/Avatar'
import { pure, setDisplayName, compose } from 'recompose'

const enhance = compose(
  setDisplayName('IntroText'),
  pure
)

const reduxLogo = 'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67'

const IntroText = enhance(() => (
  <CardText>
    This site is generated mostly in JS using React &nbsp;
    { <Avatar size={20} src='https://facebook.github.io/react/img/logo.svg'/>} &nbsp;
    {<img style={{height: 20}} src={reduxLogo}/>} &nbsp; and some friends. <br/>
    {<a href='https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'>ServiceWorkers</a>} are utilized
    along with the {<a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'>fetch api</a>}.
  </CardText>
))

export default IntroText

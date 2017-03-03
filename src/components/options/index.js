import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose } from 'recompose'
import axios from 'axios'
import Inspector from 'react-inspector'

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

const Iframes = enhance(() => (
  <CardTitle
    titleColor={colors.white}
    subtitleColor={colors.white}
    style={{margin: 10, backgroundColor: colors.teal700}}
    title='Can I bring In Another Page Using An Iframe?'
    subtitle={'The iframe is not generated using js.'}
  />
))

export default  class Opts extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      done: false,
      wasError: false,
      res: null
    }
  }

  doOpts () {
    axios({
      method: 'Options',
      url: window.location.href
    }).then(response => {
      console.log(response)
      this.setState({done: true, res: response})
    }).catch(error => {
      console.error(error)
      this.setState({done: true, wasError: true, res: error})

    })
  }

  render () {
    if (!this.state.done) {
      this.doOpts()
    }
    return (
      <Card style={{margin: 10, height: 200}}>
        <CardTitle
          titleColor={colors.white}
          subtitleColor={colors.white}
          style={{width: 'inherit',  backgroundColor: colors.teal700}}
          title='Can I Execute An HTTP Options Request?'
          subtitle={'The iframe is not generated using js.'}
        />
        <div style={{
          margin: 'auto',
          width: '50%',
          padding: '10px',
        }}>
          {!this.state.done && <CardHeader subtitle={'Making Request'}/>}
          {this.state.done && <Inspector style={{width: 300}} data={this.state.res}/>}
        </div>
      </Card>
    )
  }

}

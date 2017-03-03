import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import axios from 'axios'
import DisplayResults from './displayResults'

const subtitle = (
  <span>
    Normally this is an implicit preflight request made by your browser when requesting custom content-types (specified in the request headers).&nbsp;
    <a style={{color: colors.amber500}} href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS">More information here.</a><br/>
    When replayed the response should be an error status code 405 and 405 Not Allowed should be displayed if the page was archived via a recording mechanism. The request is made to https://n0tan3rd.github.io/replay_test/
  </span>
)

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
      url: 'https://n0tan3rd.github.io/replay_test/'
    }).then(response => {
      console.log(response)
      this.setState({
        done: true,
        wasError: false,
        res: {data: response.data, status: response.status, statusText: response.statusText, headers: response.headers}
      })
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
      <Card style={{
        margin: 10
      }}>
        <CardTitle
          titleColor={colors.white}
          subtitleColor={colors.white}
          style={{width: 'inherit', backgroundColor: colors.teal700}}
          title='Can I Execute An HTTP Options Request?'
          subtitle={subtitle}
        />
        {!this.state.done && <CardHeader subtitle={'Making Request. The raw response data will be shown below'}/>}
        {this.state.done && <DisplayResults wasError={this.state.wasError} res={this.state.res}/>}}
      </Card>
    )
  }

}

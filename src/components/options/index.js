import React, { Component, PropTypes } from 'react'
import  Card, { CardTitle, CardHeader, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import axios from 'axios'
import DisplayResults from './displayResults'

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
      this.setState({done: true, res: response})
    }).catch(error => {
      console.error(error)
      this.setState({done: true, wasError: true, res: error.response})

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
          subtitle={`When replayed the response should be an error status code 405 if archived via recording. The request is made to https://n0tan3rd.github.io/replay_test/`}
        />
        {!this.state.done && <CardHeader subtitle={'Making Request. The raw response data will be shown below'}/>}
        {this.state.done && <DisplayResults res={this.state.res}/>}}
      </Card>
    )
  }

}

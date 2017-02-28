import React  from 'react'
import  CardHeader from 'material-ui/Card/CardHeader'
import  CardText from 'material-ui/Card/CardText'
import * as colors from 'material-ui/styles/colors'
import { pure, setDisplayName, compose } from 'recompose'
import DoFetch from './doFetch'

const enhance = compose(
  setDisplayName('FetchGithubApi'),
  pure
)

const FetchGithubApi = () => (
  <div style={{width: '50%', height: 450, maxHeight: 450}}>
    <CardHeader title='Can we request https://api.github.com/repos/N0taN3rd/wail/languages?'
                subtitle={'This request represents a page attempting to retrieve a resource from service running on its domain'}/>
    <CardText>
      <a style={{color: colors.teal700}}
         key="wailLink" href="https://github.com/N0taN3rd/wail">The Web Archival Interface Layer (WAIL)</a> is
      comprised of the following languages
    </CardText>
    <div style={{
      margin: 'auto',
      width: '50%',
      padding: '10px',
    }}>
      <DoFetch />
    </div>
  </div>
)

export default enhance(FetchGithubApi)
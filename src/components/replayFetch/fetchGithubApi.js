import React  from 'react'
import  CardHeader from 'material-ui/Card/CardHeader'
import { pure, setDisplayName, compose } from 'recompose'
import DoFetch from './doFetch'

const enhance = compose(
  setDisplayName('FetchGithubApi'),
  pure
)

const FetchGithubApi = () => (
  <div>
    <CardHeader title='Can we request https://api.github.com/repos/N0taN3rd/wail?'
                subtitle={'CORS, but we should be fine at https://N0taN3rd.github.io/replay_test. Right???'}/>
    <div style={{height: 200, maxHeight: 200, overflowY: 'auto'}}>
      <DoFetch />
    </div>
  </div>
)

export default enhance(FetchGithubApi)
import React  from 'react'
import  CardHeader from 'material-ui/Card/CardHeader'
import { pure, setDisplayName, compose } from 'recompose'
import FetchLIm from './fetchLIm'

const enhance = compose(
  setDisplayName('FetchLocalImage'),
  pure
)

const FetchLocalImage = () => (
  <div>
    <CardHeader title='Can we request a local image wsdlFrog.png?'/>
    <FetchLIm  />
  </div>
)

export default enhance(FetchLocalImage)
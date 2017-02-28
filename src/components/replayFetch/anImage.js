import React  from 'react'
import  CardHeader from 'material-ui/Card/CardHeader'
import { pure, setDisplayName, compose } from 'recompose'
import FetchLIm from './fetchLIm'

const enhance = compose(
  setDisplayName('FetchLocalImage'),
  pure
)

const FetchLocalImage = () => (
  <div style={{width: '50%', height: 450, maxHeight: 450}}>
    <CardHeader title='Can we request an image called located at /wsdlFrog.png but requested via wsdlFrog.png?'
      subtitle={'The url to this resource is in JavaScript and may not be rewritten if JavaScript URL rewrites miss it'}
    />
    <div style={{
      margin: 'auto',
      width: '50%',
      padding: '10px',
    }}>
      <FetchLIm  />
    </div>
  </div>
)

export default enhance(FetchLocalImage)
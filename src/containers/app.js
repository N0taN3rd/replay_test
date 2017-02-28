import React from 'react'
import DocumentDomain from '../components/documentDomain'
import Intro from '../components/intro'
import ServiceWorkers from '../components/sw'
import Fetcher from '../components/replayFetch'
import Iframes from '../components/iframes'

const App = () => (
  <div className='container'>
    <Intro/>
    <ServiceWorkers/>
    <Fetcher/>
    <DocumentDomain />
    <Iframes/>
  </div>
)

export default App
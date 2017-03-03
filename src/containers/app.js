import React from 'react'
import DocumentDomain from '../components/documentDomain'
import Intro from '../components/intro'
import ServiceWorkers from '../components/sw'
import Fetcher from '../components/replayFetch'
import Options from '../components/options'

const App = () => (
  <div className='container'>
    <Intro/>
    <ServiceWorkers/>
    <Fetcher/>
    <DocumentDomain />
    <Options/>
  </div>
)

export default App
import React from 'react'
import ReplayFetch from '../components/replayFetch'
import Intro from '../components/intro'
import ServiceWorkers from '../components/sw'
import Fetcher from '../components/replayFetch'

const App = () => (
  <div className='container'>
    <Intro/>
    <div style={{overflowY: 'auto'}}>
      <ServiceWorkers/>
      <Fetcher/>
    </div>
  </div>
)

export default App
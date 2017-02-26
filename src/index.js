import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/app'
injectTapEventPlugin()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/app', () => {
    render(App)
  })
}
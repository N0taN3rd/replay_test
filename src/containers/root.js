import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import App from './app'

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root


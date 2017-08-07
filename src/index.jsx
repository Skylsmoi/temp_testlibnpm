import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App.jsx'
import { store } from './store.js'

require('./css/index.styl')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('temp_name')
)

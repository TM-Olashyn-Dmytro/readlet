// Client boot file
// ================

import './stylesheets/reset.css'
import './stylesheets/icons.css'
import './stylesheets/top-wrappers.css'
import 'babel-polyfill'
import App from './components/app'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <App />,
  document.querySelector('.main-wrapper')
)

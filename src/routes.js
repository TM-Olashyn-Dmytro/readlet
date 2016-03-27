// Client routes
// =============

import React from 'react'
import { Route } from 'react-router'
import App from './components/app'
import SignupScreen from './components/signup-screen'

export default <Route component={App}>
  <Route path="/(:name)" component={SignupScreen} />
</Route>

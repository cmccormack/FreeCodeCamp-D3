/* eslint no-console: 'off' */

import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/views/Home'
import Contact from './components/views/Contact'
import About from './components/views/About'

console.log('in routes')
export default (
  <Route path={'/'} component={App}>
    {/* <IndexRoute component={Home} /> */}
    <Route path={'/contact'} component={Contact} />
    <Route path={'/about'} component={About} />
    <Route path={'*'} component={Home} />
  </Route>
)

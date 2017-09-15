/* eslint no-console: 'off' */

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Contact from './components/views/Contact'
import Home from './components/views/Home'
// import routes from './routes'

console.log('in index')
ReactDOM.render(
  <Router>
    <App>
      <Route exact path={'/'} component={Home} />
      <Route path={'/contact'} component={Contact} />
      <Route path={'/about'} render={() => <h1>{'About'}</h1>} />
    </App>
  </Router>,
  document.getElementById('root'),
)

/* eslint no-console: 'off' */

import React from 'react'
import { Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// import { Header } from './layout'


const App = (props) => {
  console.log(props.children)
  console.log('in app')

  const ulStyle = {
    listStyle: 'none',
  }
  const liStyle = {
    display: 'inline',
    marginRight: '5px',
  }
  return (
    <div>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to={'/'}>{'Home'}</Link></li>
        <li style={liStyle}><Link to={'/contact'}>{'Contact'}</Link></li>
        <li style={liStyle}><Link to={'/about'}>{'About'}</Link></li>
      </ul>
      <hr />
      <Switch>
        {props.children}
      </Switch>
      <hr />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App

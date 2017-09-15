/* eslint no-console: 'off' */

import React from 'react'
import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'

import Header from './layout/Header'


const App = (props) => {
  console.log('in app')

  const options = {
    header: {
      brand: {
        title: '[ Title ]',
        icon: { class: 'fa fa-lg fa-fw fa-beer', height: '0.7' },
        url: 'https://mackville.net',
      },
      navItems: [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
        { name: 'About', url: '/about' },
      ],
    },
  }

  return (
    <div>
      <Header {...options.header} />
      <main style={{ marginTop: '52px', padding: '20px' }}>
        <Switch>
          {props.children}
        </Switch>
      </main>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App

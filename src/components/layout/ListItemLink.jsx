/* eslint no-console: 'off' */

import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropType from 'prop-types'

const ListItemLink = ({ to, children }) => (

  <Route
    path={to}
  >
    {({ match }) => (
      <li role="presentation" className={match && match.isExact ? 'active' : ''}>
        <Link to={to}>{children}</Link>
      </li>
    )}
  </Route>
)

ListItemLink.propTypes = {
  to: PropType.string.isRequired,
  children: PropType.string.isRequired,
}

export default ListItemLink

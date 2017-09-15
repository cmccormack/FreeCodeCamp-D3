/* eslint no-console: 'off' */

import React from 'react'
import PropTypes from 'prop-types'

// Replaced NavItem from modules due to bug in NavItem
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
// import { Link } from 'react-router-dom'
// import NavItem from '../NavItem'
import ListItemLink from './ListItemLink'


function buildMenuItem(item, eventKeys) {
  const dropdown = eventKeys.navCollapse.navDropdown
  dropdown.menuItemsCount += 1
  const eventKey = +`${dropdown.self}.${dropdown.menuItemsCount}`
  return (
    <MenuItem
      eventKey={eventKey}
      href={item.url}
      key={item.name}
    >
      {item.name}
    </MenuItem>
  )
}

function Header(props) {
  const { brand, navItems, dropdown } = props

  const eventKeys = {
    navCollapse: {
      navItemsCount: 0,
      navDropdown: {
        menuItemsCount: 0,
      },
    },
  }

  return (
    <Navbar
      collapseOnSelect
      fixedTop
    >
      <Navbar.Header>
        <Navbar.Brand>
          <a href={brand.url}>
            <i
              className={brand.icon.class}
              style={{
                marginRight: '5px',
                lineHeight: brand.icon.height,
              }}
            />
            <span>{brand.title}</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {navItems.map((item) => {
            eventKeys.navCollapse.navItemsCount += 1
            return (
              <ListItemLink
                eventKey={eventKeys.navCollapse.navItemsCount}
                to={item.url}
                key={item.name}
              >
                {item.name}
              </ListItemLink>
            )
          })}
          {dropdown && <NavDropdown
            eventKey={() => {
              eventKeys.navCollapse.navItemsCount += 1
              return eventKeys.navCollapse.navItemsCount
            }}
            id={dropdown.id}
            title={dropdown.title}
          >
            {
              dropdown.menuItems.map(item => buildMenuItem(item, eventKeys))
            }
            <MenuItem divider />
            {
              dropdown.footer.map(item => buildMenuItem(item, eventKeys))
            }
          </NavDropdown>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  brand: PropTypes.shape(),
  navItems: PropTypes.arrayOf(PropTypes.object),
  dropdown: PropTypes.shape(),
}

Header.defaultProps = {
  brand: {
    title: 'Title',
    icon: { class: 'fa fa-lg fa-fw fa-times', height: '0.7' },
    url: '#',
  },
  navItems: [],
  dropdown: null,
}

export default Header

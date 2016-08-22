import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap'

module.exports = (props) => (
    <div>
      <Navbar>
          <Navbar.Header>
              <Navbar.Brand>
                  <a href="#">Auth Playground</a>
              </Navbar.Brand>
          </Navbar.Header>
          <Nav>
              <NavDropdown eventKey={1} title="Google Firebase" id="basic-nav-dropdown">
                  <MenuItem eventKey={1.1} href="/firebase/popup">Popup</MenuItem>
                  <MenuItem eventKey={1.2} href="/firebase/redirect">Redirect</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="/auth0">Auth0</NavItem>
              <NavItem eventKey={3} href="/incognito">AWS Cognito</NavItem>
          </Nav>
      </Navbar>
      { props.children }
    </div>
)

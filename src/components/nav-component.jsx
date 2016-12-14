import React from 'react';
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';


class NavComponent extends React.Component {

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Spike</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#example1">Example 1</NavItem>
            <NavItem eventKey={2} href="#example2">Example 2</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavComponent;

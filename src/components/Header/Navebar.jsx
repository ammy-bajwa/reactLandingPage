import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink
} from "reactstrap";

export default class Navebar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar expand="md" id="navBar">
          <NavbarBrand>
            <span className="text-light">
              thin
              <b>
                bl
                <u>o</u>
                ck
              </b>
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-light">Our Solution</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light">Roadmap</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light">API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="light">
                  Contact Sales
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

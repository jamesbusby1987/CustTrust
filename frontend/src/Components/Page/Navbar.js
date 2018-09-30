import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../../Resources/logosmall.png";

class clsNavbar extends Component {
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
  handleClick(e) {
    e.preventDefault();

    console.log(e);

    // document.getElementById(obj.value).style.display = "none";
    // document.getElementById(obj.value).style.display = "block";
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="CustTrust Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="Signup"
                  ref="signup"
                  onClick={this.handleClick.bind(this)}
                >
                  Sign up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="About"
                  ref="about"
                  onClick={this.handleClick.bind(this)}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="Pricing"
                  ref="pricing"
                  onClick={this.handleClick.bind(this)}
                >
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="Login"
                  ref="login"
                  onClick={this.handleClick.bind(this)}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default clsNavbar;

import React, { Fragment } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Signin from "./Signin";

function NavComponent() {
  return (
    <Fragment>
      {/* nav */}
      <Navbar expand="lg">
        <div className="container">

          {/* brand */}
          <Navbar.Brand href="/">
            <img src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,h_50,w_50/v1581970125/LogoMakr_2vjJ4C.png" className="" alt="" />
          </Navbar.Brand>

          {/* toggle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* menu */}
            <Nav className="mr-auto">
              {/* documentation */}
              <Nav.Link href="/">Docs</Nav.Link>

              {/* All chats */}
              <Nav.Link href="/feed">Chat</Nav.Link>

              {/* Dropdown */}
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="admin-create-employee">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Sign In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="signout">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            {/* Sign in form */}
            <Signin/>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default NavComponent;

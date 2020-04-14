import React, { Fragment } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

function NavComponent() {
  return (
    <Fragment>
      {/* nav */}
      <Navbar expand="lg">
        <div class="container">

          {/* brand */}
          <Navbar.Brand href="/">
            <img src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,h_50,w_50/v1581970125/LogoMakr_2vjJ4C.png" class="" alt="" />
          </Navbar.Brand>

          {/* toggle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* menu */}
            <Nav className="mr-auto">
              <Nav.Link href="/">Docs</Nav.Link>

              {/* Dropdown */}
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="signin">Sign In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="signout">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            {/* search form */}
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default NavComponent;

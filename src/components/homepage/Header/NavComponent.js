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
      <Navbar bg="light" expand="lg">
        <div class="container">
          {/* brand */}
          <Navbar.Brand href="#home">
            <img src="https://res.cloudinary.com/ebysoft/image/upload/c_thumb,w_200,g_face/v1581948076/5.jpg" class="img-fluid ${3|rounded-top, rounded-right, rounded-bottom, rounded-left, rounded-circle,|}" alt="" />
          </Navbar.Brand>
          {/* toggle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* menu */}
            <Nav className="mr-auto">
              <Nav.Link href="#home">Docs</Nav.Link>
              {/* Dropdown */}
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Sign out</NavDropdown.Item>
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

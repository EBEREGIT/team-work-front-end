import React, { Fragment } from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import IsLoggedIn from "./IsLoggedIn";
import SignIn from "../../Account/SignIn";

function NavComponent() {
  return (
    <Fragment>
      {/* nav */}
      <Navbar expand="lg">
        <Container>

          {/* brand */}
          <Navbar.Brand href="/">
            <img src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,h_50,w_50/v1581970125/LogoMakr_2vjJ4C.png" className="" alt="logo" />
          </Navbar.Brand>

          {/* toggle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* menu */}
            <Nav className="mr-auto">
              {/* documentation */}
              <Nav.Link target="_blank" href="https://documenter.getpostman.com/view/11502999/Szt8dpXa?version=latest">Docs</Nav.Link>

              {/* All chats */}
              <Nav.Link href="/feed">Chat</Nav.Link>
              {/* Sign Up/sign out */}
              <IsLoggedIn/>
            </Nav>
            
            {/* Sign in form */}
            <SignIn />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavComponent;

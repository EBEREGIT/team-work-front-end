import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "./Footer/Logo";
import Menu from "./Footer/Menu";
import SocialMedia from "./Footer/SocialMedia";

function Footer() {
  return (
    <footer>
      {/* Upper footer */}
      <Row>
        {/* logo */}
        <Col xs={12} sm={12} md={4} lg={4} id="logo">
          <Logo />
        </Col>

        {/* menu items */}
        <Col xs={12} sm={12} md={4} lg={4} id="menu">
          <h4>Quick Menu</h4>
          <Menu />
        </Col>

        {/* social media */}
        <Col xs={12} sm={12} md={4} lg={4} id="connect">
          <h4>Let's Connect</h4>
          <SocialMedia />
        </Col>

        {/* Copywrite */}
        <Col>
          <p id="copywrite">
            <a href="https://www.njokusamsonebere.com/">
              Njoku Samson Ebere &copy; 2020
            </a>
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;

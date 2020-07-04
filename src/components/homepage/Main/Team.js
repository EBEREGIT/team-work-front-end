import React, { Fragment } from "react";
import { Row, Col, Image } from "react-bootstrap";

export default function Team() {
  return (
    <Fragment>
      <h4 className="headings">Our Team</h4>
      <Row className="team">
        <Col xs={6} md={4}>
          <Image
            src="https://d2cax41o7ahm5l.cloudfront.net/mi/speaker-photo/appliedmicrobiology-minl-2018-Rucha-Ridhorkar--61996-3540.png"
            roundedCircle
            fluid
          />
          <p>Adam Eve</p>
          <p>CEO</p>
          <p>+2347031904145</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="https://d2cax41o7ahm5l.cloudfront.net/mi/speaker-photo/appliedmicrobiology-minl-2018-Rucha-Ridhorkar--61996-3540.png"
            roundedCircle
            fluid
          />
          <p>Adam Eve</p>
          <p>CEO</p>
          <p>+2347031904145</p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src="https://d2cax41o7ahm5l.cloudfront.net/mi/speaker-photo/appliedmicrobiology-minl-2018-Rucha-Ridhorkar--61996-3540.png"
            roundedCircle
            fluid
          />
          <p>Adam Eve</p>
          <p>CEO</p>
          <p>+2347031904145</p>
        </Col>
      </Row>
    </Fragment>
  );
}

import React, { Fragment } from "react";
import { Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";
// initialize Animation on Scroll (AOS)
AOS.init();

export default function Team() {
  return (
    <Fragment>
      {/* Component Heading */}
      <Heading heading="Our Team" />

      <Row id="team">
        {/* member 1 */}
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          data-aos="zoom-in-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="https://d2cax41o7ahm5l.cloudfront.net/mi/speaker-photo/appliedmicrobiology-minl-2018-Rucha-Ridhorkar--61996-3540.png"
            roundedCircle
            fluid
          />
          <p>Adam Eve</p>
          <p>CEO</p>
          <p>+2347031904145</p>
        </Col>

        {/* member 2 */}
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="https://d2cax41o7ahm5l.cloudfront.net/mi/speaker-photo/appliedmicrobiology-minl-2018-Rucha-Ridhorkar--61996-3540.png"
            roundedCircle
            fluid
          />
          <p>Adam Eve</p>
          <p>CEO</p>
          <p>+2347031904145</p>
        </Col>

        {/* member 3 */}
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          data-aos="zoom-in-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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

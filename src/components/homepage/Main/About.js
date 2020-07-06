import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";
// initialize Animation on Scroll (AOS)
AOS.init();

export default function About() {
  return (
    <Fragment>
      {/* Component Heading */}
      <Heading heading="About Us" />
      
      <Row id="about-us">
        {/* video pitch */}
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="300"
          data-aos-delay="50"
        >
          <iframe
            width="100%"
            height="100%"
            title="Pitching Team Work"
            src="https://www.youtube.com/embed/Q4vtfku9qyY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>

        {/* text */}
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            sapien ut lorem tristique consectetur. Curabitur eu sapien at purus
            venenatis porttitor. Nam blandit lobortis tellus, sed tincidunt ante
            posuere quis. Cras ut arcu nisl. Suspendisse ipsum turpis, facilisis
            quis porttitor vitae, gravida a nisl. Vestibulum aliquet ex at
            turpis lacinia porttitor. Sed quis lorem ac sapien congue vulputate.
            Phasellus dictum, sem sagittis sagittis rhoncus, felis nisl
            consectetur orci, ut porttitor dui neque id neque. Donec lobortis
            massa at aliquam semper. Sed dolor sem, facilisis ut aliquet vel,
            bibendum id nibh.
          </p>

          {/* call to action button */}
          <a
            href="/sign-up"
            className="btn btn-success btn-block"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Join Team Work
          </a>
        </Col>
      </Row>
    </Fragment>
  );
}

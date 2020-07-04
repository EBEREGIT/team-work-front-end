import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Fragment>
      <h4 className="headings">About Us</h4>
      <Row id="about-us">
        {/* video pitch */}
        <Col xs={12} sm={12} md={6} lg={6}>
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
        <Col xs={12} sm={12} md={6} lg={6}>
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
          <a href="/signup" className="btn btn-success btn-block">
            Join Team Work
          </a>
        </Col>
      </Row>
    </Fragment>
  );
}

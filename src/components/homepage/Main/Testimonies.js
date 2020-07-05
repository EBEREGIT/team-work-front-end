import React, { Fragment } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

export default function Testimonies() {
  return (
    <Fragment>
      <Col xs={12} sm={12} md={12} lg={12}>
        <h3 className="headings">Testimonies</h3>
      </Col>

      <Row id="testimonies">
        <Col
          xs={12}
          sm={12}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              {/* client photo */}
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_50,o_50,w_50/v1581948076/2.jpg"
                alt="First slide"
                roundCircle
                fluid
              />
              {/* client comment */}
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <div class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </div>
              </blockquote>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              {/* client image */}
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948076/4.jpg"
                alt="Third slide"
              />
              {/* client comment */}
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <div class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </div>
              </blockquote>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              {/* client image */}
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948077/four-people-using-laptop-computers-and-smartphone-3277808.jpg"
                alt="Third slide"
              />
              {/* client comment */}
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <div class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </div>
              </blockquote>
            </Carousel.Item>

            {/* Slide 4 */}
            <Carousel.Item>
              {/* client image */}
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948078/6.jpg"
                alt="Third slide"
              />
              {/* client comment */}
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <div class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </div>
              </blockquote>
            </Carousel.Item>

            {/* Slide 5 */}
            <Carousel.Item>
              {/* client image */}
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948076/3.jpg"
                alt="Third slide"
              />
              {/* client comment */}
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <div class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </div>
              </blockquote>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Fragment>
  );
}

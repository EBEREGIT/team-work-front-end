import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

export default function Testimonies() {
  return (
    <Row id="testimonies">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h4 className="headings">Testimonies</h4>
      </Col>

      <Col
        xs={12}
        sm={12}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 6, offset: 3 }}
      >
        <Carousel>
          {/* Slide 1 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_50,o_50,w_50/v1581948076/2.jpg"
              alt="First slide"
              roundCircle
              fluid
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              sapien ut lorem tristique consectetur. Curabitur eu sapien at
              purus venenatis porttitor. Nam blandit lobortis tellus, sed
              tincidunt ante posuere quis.
            </p>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948076/4.jpg"
              alt="Third slide"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              sapien ut lorem tristique consectetur. Curabitur eu sapien at
              purus venenatis porttitor. Nam blandit lobortis tellus, sed
              tincidunt ante posuere quis.
            </p>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948077/four-people-using-laptop-computers-and-smartphone-3277808.jpg"
              alt="Third slide"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              sapien ut lorem tristique consectetur. Curabitur eu sapien at
              purus venenatis porttitor. Nam blandit lobortis tellus, sed
              tincidunt ante posuere quis.
            </p>
          </Carousel.Item>

          {/* Slide 4 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948078/6.jpg"
              alt="Third slide"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              sapien ut lorem tristique consectetur. Curabitur eu sapien at
              purus venenatis porttitor. Nam blandit lobortis tellus, sed
              tincidunt ante posuere quis.
            </p>
          </Carousel.Item>

          {/* Slide 5 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,co_rgb:28a745,dn_150,e_auto_saturation,h_100,o_50,w_1200/v1581948076/3.jpg"
              alt="Third slide"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              sapien ut lorem tristique consectetur. Curabitur eu sapien at
              purus venenatis porttitor. Nam blandit lobortis tellus, sed
              tincidunt ante posuere quis.
            </p>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

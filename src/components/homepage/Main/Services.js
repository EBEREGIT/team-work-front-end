import React from "react";
import { Card, CardDeck, Row } from "react-bootstrap";
import { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Services() {
  return (
    <Fragment>
      <h3 className="headings">Our Services</h3>
      <Row id="services">
        <CardDeck>
          {/* service 1 */}
          <Card
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Card.Img
              variant="top"
              src="https://cdn.get.tech/blog/wp-content/uploads/2020/02/tech-student-portfolio.jpg"
            />
            <Card.Body>
              <Card.Title>Mentoring</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* service 2 */}
          <Card
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Card.Img
              variant="top"
              src="https://www.readingrockets.org/sites/default/files/styles/share_image/public/field/image/ic-at-2.jpg?itok=XC4cmY-E.jpg"
            />
            <Card.Body>
              <Card.Title>Teaching</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* service 3 */}
          <Card
            data-aos="zoom-in-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Card.Img
              variant="top"
              src="https://mbokayabakoko.files.wordpress.com/2011/05/connecting2.jpg"
            />
            <Card.Body>
              <Card.Title>Networking</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
    </Fragment>
  );
}

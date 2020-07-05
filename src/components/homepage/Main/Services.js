import React from "react";
import { Card, CardDeck, Row } from "react-bootstrap";
import { Fragment } from "react";

export default function Services() {
  return (
    <Fragment>
      <h3 className="headings"> Our Services</h3>
      <Row id="services">
        <CardDeck>
          <Card>
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
          <Card>
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
          <Card>
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

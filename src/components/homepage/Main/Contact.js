import React, { Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Fragment>
        <h3 className="headings">Contact Us</h3>
      <Row>
        {/* Map */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4983440950637!2d7.544199814467895!3d6.458366095327719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5a782353a8f%3A0x10afcd81b4f61980!2sEnugu%20State!5e0!3m2!1sen!2sng!4v1593858463759!5m2!1sen!2sng"
            title="Location Map"
            width="100%"
            height="100%"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Col>

        {/* Contact form */}
        <Col xs={12} sm={12} md={6} lg={6}>
          <Form>
            <Form.Row>
              {/* fullname */}
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Full Name" />
              </Form.Group>

              {/* email */}
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            {/* message */}
            <Form.Group controlId="formGridMessage1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            {/* checkbox */}
            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Inform me about updates in your company"
              />
            </Form.Group>

            {/* submit */}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
}

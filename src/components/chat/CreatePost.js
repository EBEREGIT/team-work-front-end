import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";

export default class CreatePost extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Form.Group
                as={Col}
                md="10"
                controlId="exampleForm.ControlInput1"
              >
                {/* Article Title */}
                <Form.Control type="text" placeholder="Enter Title" />

                {/* Article Body */}
                <Form.Control as="textarea" rows="3" placeholder="Enter Body" />
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="exampleForm.ControlInput1">
                {/* image imput */}
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />

                {/* submit button */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

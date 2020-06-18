import React, { Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function Article() {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {/* button to pop up modal */}
      <Button variant="primary" onClick={() => setShow(true)}>
        Create Article Post
      </Button>

      {/* modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {/* button to close modal */}
        <Modal.Header closeButton>
          {/* Title */}
          <Modal.Title id="example-custom-modal-styling-title">
            Create Article Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* form */}
          <Form>
            {/* article title */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Article Title" />
            </Form.Group>

            {/* article body */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Enter Article Body"
              />
            </Form.Group>

            {/* button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

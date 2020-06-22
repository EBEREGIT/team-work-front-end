import React, { Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function GIF() {
  const [show, setShow] = useState(false),
  [title, setTitle] =  useState(""),
  [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    
    
  }

  return (
    <Fragment>
      {/* button to pop up modal */}
      <Button variant="primary" onClick={() => setShow(true)}>
        Create GIF Post
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
          <Form onSubmit={handleSubmit}>
            {/* article title */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(console.log(e.target.value))}
                placeholder="Enter Article Title"
              />
            </Form.Group>

            {/* article body */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Body</Form.Label>
              <Form.Control
                type="file"
                name="image"
                value={image}
                onChange={(e) => setImage(console.log(e.target.value))}
                placeholder="Enter Article Body"
              />
            </Form.Group>

            {/* button */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Create Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

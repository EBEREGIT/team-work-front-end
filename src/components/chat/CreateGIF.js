import React, { Component, Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// create GIF modal
export default function CreateGIF(props) {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {/* button to pop up modal */}
      <Button variant="success" onClick={() => setShow(true)} size="lg" block>
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
            Create GIF Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GIFForm />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

// create article form
class GIFForm extends Component {
  // initial state
  state = {
    title: "",
    image: "",
  };

  // happen when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();

    // get cookie from browser if logged in
    const token = cookies.get("AUTH-TOKEN"),
      method = "post",
      url = "http://localhost:5000/gifs/",
      //   data from user
      data = this.state,
      
      // header
      headers = {
        Authorization: `Basic ${token}`,
      };

    // instantiate new FIleReader Class
    let imageData = new FileReader();
    // set the path of the image
    imageData.readAsDataURL(data.image);
    // when the path is set, make the API call
    console.log(imageData);
    imageData.onload = (e) => {
      // make createGIF API call
      axios({
        method,
        url,
        data: {
          title: data.title,
          image: e.target.result,
        },
        headers,
      })
        .then((gifResult) => {
          console.log(gifResult);
        })
        .catch((e) => console.log(e));
    };
  };

  // on every key stroke, Update the state
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // happen when a user uploads an image
  handleFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  render() {
    // data from the state
    const { title, image } = this.state;

    return (
      <Fragment>
        {/* form */}
        <Form onSubmit={this.handleSubmit}>
          {/* article title */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="Enter Article Title"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              value={image}
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* button */}
          <Button variant="success" type="submit" onClick={this.handleSubmit}>
            Create Post
          </Button>
        </Form>
      </Fragment>
    );
  }
}

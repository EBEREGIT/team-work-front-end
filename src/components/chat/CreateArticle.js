import React, { Component, Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// create article modal
export default function CreateArticle(props) {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {/* button to pop up modal */}
      <Button variant="success" onClick={() => setShow(true)} size="lg" block>
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
          <ArticleForm />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

// create article form
class ArticleForm extends Component {
  // initial state
  state = {
    title: "",
    body: "",
  };

  // submits form
  handleSubmit = (e) => {
    e.preventDefault();

    // collect token from cookie
    const token = cookies.get("AUTH-TOKEN");
    //   API url to be called
    const url = "https://tw-apis.herokuapp.com/articles/";
    //   headers
    const headers = {
      Authorization: `Basic ${token}`,
    };
    // data
    const data = this.state;

    // make API call
    axios({
      method: "post",
      url,
      data,
      headers,
    })
      .then((artcleResult) => {
        // refresh page to remove the sign up and login from nav bar
        window.location.reload();
        // prevent further reload
        return false;
      })
      .catch((error) => {
        error = new Error(error);
        throw error;
      });
  };

  // on every key stroke, Update the state
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // data from the state
    const { title, body } = this.state;

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

          {/* article body */}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="body"
              value={body}
              onChange={this.handleChange}
              placeholder="Enter Article Body"
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

import React, { Component, Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// edit article modal
export function EditArticle(props) {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {/* button to pop up modal */}
      <Button variant="success" onClick={() => setShow(true)}>
        Edit
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
            Edit Article
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Article form component receives props passed from the allChats component */}
          <ArticleForm
            id={props.articleID}
            title={props.articleTitle}
            body={props.articleBody}
          />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

// edit article form
class ArticleForm extends Component {
  constructor(props) {
    super(props);
    // initial state. This state is gotten passed from the edit modal component
    this.state = {
      id: props.id,
      title: props.title,
      body: props.body,
      isEditting: false,
    };
  }

  // submits form
  handleSubmit = (e) => {
    e.preventDefault();
    // set isEditting to true
    this.setState({
      isEditting: true,
    });

    // collect token from cookie
    const token = cookies.get("AUTH-TOKEN");
    //   API url to be called
    const url = `https://tw-apis.herokuapp.com/articles/${this.state.id}`;
    //   headers
    const headers = {
      Authorization: `Basic ${token}`,
    };
    // data
    const data = {
      title: this.state.title,
      body: this.state.body,
    };

    // make API call
    axios({
      method: "patch",
      url,
      data,
      headers,
    })
      .then(() => {
        // set isEditting to false
        this.setState({
          isEditting: false,
        });
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
    const { title, body, isEditting } = this.state;

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
            { isEditting ? "Editing" : "Edit Post"}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

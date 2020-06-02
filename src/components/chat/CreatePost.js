import React, { Component } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    // default form input
    this.state = {
      title: "",
      body: "",
      image: null,
    };
  }

  // happen when a user types in the form
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
  };

  // happen when a user types in the form
  handleFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  // happen when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();

    // get cookie from browser if logged in
    const token = cookies.get("AUTH-TOKEN");

    //   data from user
    const data = this.state;
    // header
    const headers = {
      Authorization: `Basic ${token}`
    };
    
    // instantiate new FIleReader Class
    let imageData = new FileReader();
    // set the path of the image
    imageData.readAsDataURL(data.image);

    // when the path is set, make the API call
    imageData.onload = (e) => {
      // make createGIF API call
      axios({
        method: "post",
        url: "https://tw-apis.herokuapp.com/gifs/",
        data: {
          title: data.title,
          image: e.target.result,
        },
        headers
      })
        .then((gifResult) => {
          console.log(gifResult);
        })
        .then(
          // make createArticle API call
          axios
            .post("https://tw-apis.herokuapp.com/articles/", {
              data,
              headers
            })
            .then((artcleResult) => {
              console.log(artcleResult);
            })
        )
        .catch((e) => console.log(e));
    };
  };

  render() {
    const { title, body } = this.state;

    return (
      <Row>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group
                as={Col}
                md="10"
                // controlId="exampleForm.ControlInput1"
              >
                {/* Article Title */}
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Enter Title"
                  onChange={this.handleChange}
                />

                {/* Article Body */}
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="body"
                  value={body}
                  placeholder="Enter Body"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="exampleForm.ControlInput1">
                {/* image imput */}
                <input
                  type="file"
                  class="form-control-file"
                  name="image"
                  onChange={this.handleFileChange}
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

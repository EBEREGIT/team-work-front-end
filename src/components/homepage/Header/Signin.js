import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

class Signin extends Component {
  constructor(props) {
    super(props);

    // default form values
    this.state = {
      email: "",
      password: "",
    };
  }

  // happen when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    //   API url to be called
    const url = "auth/signin";
    //   data from user
    const data = this.state;
    //   headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    axios({
      method: "post",
      url,
      data,
      headers,
    })
      .then((result) => {
        // create cookie with the JWT
        cookies.set("AUTH-TOKEN", result.data.token, { path: "/" });
        // redirect user to the feeds page
        this.props.history.push("feed");
      })
      .catch((error) => {
        error = new Error(error);
        throw error;
      });
  };

  // happen when a user is typing into the input box
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // get the details setState()
    const { email, password } = this.state;

    return (
      <Form inline onSubmit={this.handleSubmit}>
        {/* email */}
        <FormControl
          type="email"
          placeholder="email"
          className="mr-sm-2"
          name="email"
          value={email}
          onChange={this.handleInputChange}
        />
        {/* password */}
        <FormControl
          type="password"
          placeholder="password"
          className="mr-sm-2"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        />
        {/* button */}
        <Button type="submit" onClick={this.handleSubmit}>
          Sign In
        </Button>
      </Form>
    );
  }
}

export default withRouter(Signin);

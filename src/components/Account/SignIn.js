import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

class SignIn extends Component {
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
    const url = "https://tw-apis.herokuapp.com/auth/signin";
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

  // happen when a user is typing into the input box
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // get the details setState()
    const { email, password } = this.state;
    // get cookie from browser if logged in
    const token = cookies.get("AUTH-TOKEN");

    // show message if logged in
    if (token) {
      return (
        <p>
          <i>Hi, Welcome To Team Work</i>
        </p>
      );
    } else {
      // show form if logged out
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
          <Button type="submit" className="btn-success" onClick={this.handleSubmit}>
            Sign In
          </Button>
        </Form>
      );
    }
  }
}

export default withRouter(SignIn);

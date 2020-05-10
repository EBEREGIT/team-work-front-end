import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default class Signin extends Component {
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
    const url = "http://localhost:5000/auth/signin";
    //   data from user
    const data = this.state;
    //   API call options
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // fetch the API
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => {
        console.log("frontend failure" + error);
      });
  };

  // happen when a user is typing into the input box
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // get the details returned by the API call
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
        <Button type="submit">Sign In</Button>
      </Form>
    );
  }
}

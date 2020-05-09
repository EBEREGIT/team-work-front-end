import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    // default form values
    this.state ={
      email: "",
      password: "",
    };
  }

  // happen when form is submitted
  handleInputChange = (e) => {};

  // happen when a user is typing into the input box
  handleInputChange = (e) => {
      console.log(e.target.value);
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
        <Button variant="outline-success">Sign In</Button>
      </Form>
    );
  }
}

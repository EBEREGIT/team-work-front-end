import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Account.scss";
import axios from "axios";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class SignUp extends Component {
  constructor(props) {
    super(props);
    // setting all input values to empty by default
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      job_role: "",
      department: "",
      address: "",
      isSigningUp: false,
    };
  }

  // happens when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    // set isSigningUp to true
    this.setState({
      isSigningUp: true,
    });
    // url
    const url = "https://tw-apis.herokuapp.com/auth/create-user/",
      // data
      data = this.state,
      // method
      method = "POST",
      // headers
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

    // create user
    axios({ url, method, headers, data })
      .then((result) => {
        // login user
        const url = "https://tw-apis.herokuapp.com/auth/signin",
          //   data from user
          data = {
            email: result.data.result.email,
            password: result.data.result.password,
          };

        // login uer
        axios({ method, url, data, headers })
          .then((result) => {
            // create cookie with the JWT
            cookies.set("AUTH-TOKEN", result.data.token, { path: "/" });
            // set isSigningUp to true
            this.setState({
              isSigningUp: false,
            });
            // redirect user to the feeds page
            this.props.history.push("feed");
            // refresh page to remove the sign up and login from nav bar
            window.location.reload();
            // prevent further reload
            return false;
          })
          // login error
          .catch((error) => {
            error = new Error(error);
            throw error;
          });
      })
      // sign up error
      .catch((error) => {
        error = new Error(error);
        throw error;
      });
  };

  // happens when a user is typing in an input box
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // passing down the values from the state
    const {
      first_name,
      last_name,
      email,
      password,
      gender,
      job_role,
      department,
      address,
      isSigningUp,
    } = this.state;

    return (
      <div className="account">
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 5 }}>
              {/* registration form */}
              <form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <legend>Create an Account</legend>

                  {/* First name */}
                  <Form.Group as={Col} controlId="formGridfirst_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="name"
                      name="first_name"
                      value={first_name}
                      placeholder="First Name"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  {/* Last Name */}
                  <Form.Group as={Col} controlId="formGridlast_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="name"
                      name="last_name"
                      value={last_name}
                      placeholder="Last Name"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  {/* Email */}
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      placeholder="email"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  {/* password */}
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  {/* Gender */}
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      value={gender}
                      onChange={this.handleInputChange}
                    >
                      <option>Choose Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>

                  {/* Job Role */}
                  <Form.Group as={Col} controlId="formGridjob_role">
                    <Form.Label>Job Role</Form.Label>
                    <Form.Control
                      type="text"
                      name="job_role"
                      value={job_role}
                      placeholder="Job Role"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDepartment">
                    {/* Department */}
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      name="department"
                      value={department}
                      placeholder="Department"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress">
                  {/* Address */}
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="textarea"
                    name="address"
                    value={address}
                    placeholder="Address"
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {isSigningUp ? "Registering" : "Register"}
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignUp);

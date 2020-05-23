import React, { Component } from "react";
import "./Account.scss";
import { Form, Col, Button, Container, Row } from "react-bootstrap";

class AdminCreateProfile extends Component {
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
    };
  }

  // happens when form is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://tw-apis.herokuapp.com/auth/create-user/";
    const data = this.state;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) =>
        console.error("failure on API call from Frontend:" + error)
      );
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
    } = this.state;

    return (
      <div className="account">
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 5 }}>

              {/* registration form */}
              <form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <legend>Create an Employee's Profile</legend>

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
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminCreateProfile;

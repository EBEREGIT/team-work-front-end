import React, { Component } from "react";
import "./Account.scss";
import { Form, Col, Button, Container, Row } from "react-bootstrap";

class AdminCreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      jobRole: "",
      department: "",
      address: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:5000/auth/create-user/";
    const data = this.state;
    const options = {
      method: "post",
      headers: new Headers(),
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error("failure on API call from Frontend:" + error));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      jobRole,
      department,
      address
    } = this.state;

    return (
      <div className="account">
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 5 }}>
              <form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <legend>Create an Employee's Profile</legend>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="name"
                      name="firstName"
                      value={firstName}
                      placeholder="First Name"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="name"
                      name="lastName"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
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

                  <Form.Group as={Col} controlId="formGridJobRole">
                    <Form.Label>Job Role</Form.Label>
                    <Form.Control
                      type="text"
                      name="jobRole"
                      value={jobRole}
                      placeholder="Job Role"
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDepartment">
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

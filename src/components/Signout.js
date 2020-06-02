import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Signout extends Component {
  // logout function
  logout = () => {
    // destroy the cookie
    cookies.remove("AUTH-TOKEN", { path: "/" });
    // direct the user to the landing page
    this.props.history.push("/");
  };

  render() {
    return (
      <Button
        type="submit"
        className="btn-danger"
        onClick={() => this.logout()}
      >
        Sign Out
      </Button>
    );
  }
}

export default withRouter(Signout);
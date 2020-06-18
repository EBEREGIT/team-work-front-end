import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class SignOut extends Component {
  // logout function
  logout = () => {
    // destroy the cookie
    cookies.remove("AUTH-TOKEN", { path: "/" });
    // direct the user to the landing page
    this.props.history.push("/");
    // refresh page to remove the sign out button from nav bar
    window.location.reload();
    // prevent further reload
    return false;
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

export default withRouter(SignOut);
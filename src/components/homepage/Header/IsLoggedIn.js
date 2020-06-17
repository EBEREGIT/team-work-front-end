import React from "react";
import { Nav } from "react-bootstrap";
import Cookies from "universal-cookie";
import Signout from "../../Signout";
const cookies = new Cookies();

export default function IsLoggedIn() {
  // get cookie from browser if logged in
  const token = cookies.get("AUTH-TOKEN");

  //   check if logged in
  if (token) {
    return <Signout />;
  } else {
    return <Nav.Link href="/admin-create-employee">Sign Up</Nav.Link>;
  }
}

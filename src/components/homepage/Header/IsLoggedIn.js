import React from "react";
import { Nav } from "react-bootstrap";
import Cookies from "universal-cookie";
import SignOut from "../../Account/SignOut";
const cookies = new Cookies();

export default function IsLoggedIn() {
  // get cookie from browser if logged in
  const token = cookies.get("AUTH-TOKEN");

  //   check if logged in
  if (token) {
    return <SignOut />;
  } else {
    return <Nav.Link href="/sign-up">Sign Up</Nav.Link>;
  }
}

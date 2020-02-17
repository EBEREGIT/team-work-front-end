import React, { Fragment } from "react";
import NavComponent from "./Header/NavComponent";
import Slider from "./Header/Slider";

function Header() {
  return (
    <Fragment>
      <NavComponent />
      <Slider />
    </Fragment>
  );
}

export default Header;

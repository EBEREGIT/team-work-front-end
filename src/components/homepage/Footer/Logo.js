import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

export default function Logo() {
  return (
    <Fragment>
      <h1>Team Work</h1>
      <Image
        src="https://res.cloudinary.com/ebysoft/image/upload/c_scale,h_150,w_150/v1581970125/LogoMakr_2vjJ4C.png"
        thumbnail
        fluid
      />
    </Fragment>
  );
}

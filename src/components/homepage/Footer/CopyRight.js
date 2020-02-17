import React, { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap";

function CopyRight() {
  return (
    <Fragment>
      <Breadcrumb className="container">
        <Breadcrumb.Item href="https://twitter.com/eberetwit">Twitter</Breadcrumb.Item>
        <Breadcrumb.Item href="https://github.com/EBEREGIT">Github</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.linkedin.com/in/samson-ebere-njoku-profile/">LinkedIn</Breadcrumb.Item>
        <Breadcrumb.Item href="https://dev.to/ebereplenty">Dev.to</Breadcrumb.Item>
        <Breadcrumb.Item href="https://codepen.io/ebereplenty">Code Pen</Breadcrumb.Item>

        <Breadcrumb.Item active>Njoku Samson Ebere &copy; 2020</Breadcrumb.Item>
      </Breadcrumb>
    </Fragment>
  );
}

export default CopyRight;

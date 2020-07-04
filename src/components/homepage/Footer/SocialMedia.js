import React, { Fragment } from "react";
import { ListGroup } from "react-bootstrap";

export default function SocialMedia() {
  return (
    <Fragment>
      <ListGroup variant="flush">
          {/* Twitter */}
        <ListGroup.Item>
          <a href="https://twitter.com/eberetwit">Twitter</a>
        </ListGroup.Item>

        {/* Github */}
        <ListGroup.Item>
          <a href="https://github.com/EBEREGIT">Github</a>
        </ListGroup.Item>

        {/* LinkedIn */}
        <ListGroup.Item>
          <a href="https://www.linkedin.com/in/samson-ebere-njoku-profile/">
            LinkedIn
          </a>
        </ListGroup.Item>

        {/* DevTo */}
        <ListGroup.Item>
          <a href="https://dev.to/ebereplenty">Dev.to</a>
        </ListGroup.Item>

        {/* Code Pen */}
        <ListGroup.Item>
          <a href="https://codepen.io/ebereplenty">Code Pen</a>
        </ListGroup.Item>

        {/* Facebook */}
        <ListGroup.Item>
          <a href="https://web.facebook.com/samsonebere.njoku">Facebook</a>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
}

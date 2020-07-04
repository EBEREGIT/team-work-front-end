import React, { Fragment } from "react";
import { ListGroup } from "react-bootstrap";

export default function Menu() {
  return (
    <Fragment>
      <ListGroup variant="flush">
        {/* Documentation */}
        <ListGroup.Item>
          <a
            target="_blank"
            href="https://documenter.getpostman.com/view/11502999/Szt8dpXa?version=latest"
            rel="noopener noreferrer"
          >
            Docs
          </a>
        </ListGroup.Item>

        {/* Feed */}
        <ListGroup.Item>
          <a href="/feed">Feed</a>
        </ListGroup.Item>

        {/* Register */}
        <ListGroup.Item>
          <a href="/signup">Register</a>
        </ListGroup.Item>

        {/* Login */}
        <ListGroup.Item>
          <a href="/signin">Login</a>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
}

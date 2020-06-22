import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Article from "./Article";
import GIF from "./GIF";

export default function CreatePost()  {
    return (
      <Fragment>
        <Row className="text-center">
          {/* article button */}
          <Col>
            <Article />
          </Col>

          {/* GIF button */}
          <Col>
            <GIF />
          </Col>
        </Row>
      </Fragment>
    );
  }
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CreateArticle from "./CreateArticle";
import CreateGIF from "./CreateGIF";

export default function CreatePost()  {
    return (
      <Fragment>
        <Row className="text-center create-post">
          {/* article button */}
          <Col>
            <CreateArticle />
          </Col>

          {/* GIF button */}
          <Col>
            <CreateGIF />
          </Col>
        </Row>
      </Fragment>
    );
  }
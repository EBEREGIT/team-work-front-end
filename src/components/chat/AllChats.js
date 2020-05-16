import React, { Fragment } from 'react'
import { Image, Col, Button, Card, Row } from "react-bootstrap";

let items = [];

for (let index = 0; index < 10; index++) {
  items.push(
    <Row className="all-chats">
  <Col lg={12}>
    <Card style={{ width: "100%" }}>
      <Card.Title>Poster Name</Card.Title>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        height="auto"
        width="100%"
      />
      <Card.Body>
        <Card.Title>Article Title</Card.Title>
        <Card.Text>
          Article Body
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  </Col>
  </Row>
  )
}

export default function AllChats()  {
        return (
            <Fragment>
        {items}
        </Fragment>
        )
    }

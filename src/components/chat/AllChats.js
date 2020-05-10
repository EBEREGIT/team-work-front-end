import React, { Fragment } from 'react'
import { Image, Col, Button, Card, Row } from "react-bootstrap";

let items = [];

for (let index = 0; index < 10; index++) {
  items.push(
    <Row className="all-chats">
    <Col lg={4}>
    <Image
      src="https://pngimage.net/wp-content/uploads/2019/05/dummy-man-png-2.png"
      width="100%"
      height="50%"
      alt="profile AVI"
      roundedCircle
    />
  </Col>

  <Col lg={8}>
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        height="100%"
        width="100%"
      />
      <Card.Body>
        <Card.Title>Article Title</Card.Title>
        <Card.Text>
          Article Body
        </Card.Text>
        <Button variant="primary">View More</Button>
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

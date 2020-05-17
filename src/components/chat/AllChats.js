import React, { Fragment, Component } from "react";
import { Col, Button, Card, Row } from "react-bootstrap";
import axios from "axios";

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
            <Card.Text>Article Body</Card.Text>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default class AllChats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/feed/")
      .then((feed) => {
        this.setState({
          feed,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { feed } = this.state;
    // get the data from the response
    const feedData = feed.data;

    // extract the gif Feed and article feed
    const allFeed = [];
    for (let data in feedData) {
      allFeed.push(feedData[data]);
    }

    // put the gif feeds in an array
    const gifFeed = allFeed[1];
    const gifs = [];
    
    // loop through the gif Feed for display on the page
    for (let gif in gifFeed) {
      gifs.push(
        <Row className="all-chats">
        <Col lg={12}>
          <Card style={{ width: "100%" }}>
            <Card.Title>Poster Name</Card.Title>
            <Card.Img
              variant="top"
              src={gifFeed[gif].image_url}
              height="auto"
              width="100%"
            />
            <Card.Body>
              <Card.Title>{gifFeed[gif].title}</Card.Title>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      )}

    // put the article feeds in an array
    const articleFeed = allFeed[2];
    const articles = [];

    // loop through the gif Feed for display on the page
    for (let article in articleFeed) {
      articles.push(
        <Row className="all-chats">
        <Col lg={12}>
          <Card style={{ width: "100%" }}>
            <Card.Title>Poster Name</Card.Title>
            <Card.Body>
              <Card.Title>{articleFeed[article].title}</Card.Title>
              <Card.Text>{articleFeed[article].body}</Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      )}

    return (
      <Fragment>
        <h2 style={{ backgroundColor:"white" }}>Articles Feed</h2>
        {articles}

        <h2 style={{ backgroundColor: "white", marginTop: "5%" }}>Image Feed</h2>
        {gifs}
      </Fragment>
    );
  }
}

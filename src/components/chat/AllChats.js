import React, { Fragment, Component } from "react";
import { Col, Button, Card, Row } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class AllChats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: "",
    };
  }

  componentDidMount() {
    const token = cookies.get("AUTH-TOKEN");
    //   API url to be called
    const url = "https://tw-apis.herokuapp.com/feed/";
    //   headers
    const headers = {
      Authorization: `Basic ${token}`,
    };

    axios({
      method: "get",
      url,
      headers,
    })
      .then((feed) => {
        this.setState({
          feed,
        });
      })
      .catch((error) => {
        error = new Error(error);
        throw error;
      });
  }

  // delete article here
  deleteArticle(id) {
    const token = cookies.get("AUTH-TOKEN");
    //   headers
    const headers = {
      Authorization: `Basic ${token}`,
    };
    // url
    const url = `https://tw-apis.herokuapp.com/articles/${id}`;

    axios({
      method: "delete",
      url,
      headers,
    })
    // update the feed if delete is successful
      .then(() => {
        // feed URL
        const url = "https://tw-apis.herokuapp.com/feed/";

        axios({
          method: "get",
          url,
          headers,
        })
          .then((feed) => {
            this.setState({
              feed,
            });
          })
          .catch((error) => {
            error = new Error(error);
            throw error;
          });
      })
      // delete error
      .catch((error) => {
        error = new Error(error);
        throw error;
      });
  }

  // render page
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
            <Card>
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
      );
    }

    // put the article feeds in an array
    const articleFeed = allFeed[2];
    const articles = [];

    // loop through the article Feed for display on the page
    for (let article in articleFeed) {
      articles.push(
        <Row className="all-chats">
          <Col lg={12}>
            <Card>
              <Card.Title>Poster Name</Card.Title>
              <Card.Body>
                <Card.Title>{articleFeed[article].title}</Card.Title>
                <Card.Text>{articleFeed[article].body}</Card.Text>
                <Button variant="primary">Edit</Button>
                <Button
                  variant="danger"
                  type="submit"
                  // function call when the delete button is clicked
                  onClick={() => {
                    this.deleteArticle(articleFeed[article].id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    }

    return (
      <Fragment>
        <h2 style={{ backgroundColor: "white" }}>Articles Feed</h2>
        {articles}

        <h2 style={{ backgroundColor: "white", marginTop: "5%" }}>
          Image Feed
        </h2>
        {gifs}
      </Fragment>
    );
  }
}

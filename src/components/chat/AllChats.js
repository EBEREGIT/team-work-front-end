import React, { Fragment, Component } from "react";
import { Col, Button, Card, Row } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import { EditArticle } from "./EdithArticle";
import Heading from "../homepage/Main/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
// initialize cookies
const cookies = new Cookies();
// initialize Animation on Scroll (AOS)
AOS.init();

export default class AllChats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: "",
      articleID: null,
      isDeleting: false,
    };
  }

  // handle API call here
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
    // set isDeleting to true
    this.setState({
      isDeleting: true,
    });
    // collect token from cookie
    const token = cookies.get("AUTH-TOKEN");
    //   headers
    const headers = {
      Authorization: `Basic ${token}`,
    };
    // url with article unique ID
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
              isDeleting: false,
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

  // delete GIF here
  deleteGIF = (id) => {
    alert(`${id}: Unsupport Action. You can only upload and view image`);
  };

  // render page
  render() {
    const { feed, isDeleting } = this.state;
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
          <Col
            lg={12}
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Card>
              {/* <Card.Title>Poster Name</Card.Title> */}
              <Card.Img
                variant="top"
                src={gifFeed[gif].image_url}
                height="auto"
                width="100%"
              />
              <Card.Body>
                <Card.Title>{gifFeed[gif].title}</Card.Title>
                <Button variant="success">Edit</Button>
                <Button
                  variant="danger"
                  type="submit"
                  // function call when the delete button is clicked
                  onClick={() => {
                    this.deleteGIF(gifFeed[gif].id);
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

    // put the article feeds in an array
    const articleFeed = allFeed[2];
    const articles = [];

    // loop through the article Feed for display on the page
    for (let article in articleFeed) {
      articles.push(
        <Row className="all-chats">
          <Col
            lg={12}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <Card>
              {/* <Card.Title>Poster Name</Card.Title> */}
              <Card.Body>
                <Card.Title>{articleFeed[article].title}</Card.Title>
                <Card.Text>{articleFeed[article].body}</Card.Text>
                {/* edit article button. props are passed to the edit article component from here */}
                <EditArticle
                  articleID={articleFeed[article].id}
                  articleTitle={articleFeed[article].title}
                  articleBody={articleFeed[article].body}
                />

                {/* delete article button */}
                <Button
                  variant="danger"
                  type="submit"
                  // function call when the delete button is clicked
                  onClick={() => {
                    this.deleteArticle(articleFeed[article].id);
                  }}
                >
                  {isDeleting ? "Deleting" : "Delete"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    }

    return (
      <Fragment>
        <Row>
          <Col xm={12} sm={12} md={6} lg={6}>
            <Heading heading="Article Feed" />
            {articles}
          </Col>

          <Col xm={12} sm={12} md={6} lg={6}>
            <Heading heading="Image Feed" />
            {gifs}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

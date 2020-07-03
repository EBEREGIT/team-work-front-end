import React from "react";
import { Container } from "react-bootstrap";
import Header from "./homepage/Header";
import Footer from "./homepage/Footer";
import Main from "./homepage/Main";

function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;

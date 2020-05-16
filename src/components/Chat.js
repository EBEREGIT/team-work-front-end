import React from "react";
import { Container } from "react-bootstrap";
import CreatePost from "./chat/CreatePost";
import "./Account/Account.scss";
import AllChats from "./chat/AllChats";

export default function Chat() {
  return (
    <Container className="chat">
      {/* chat form */}
      <CreatePost />

      {/* chats from DB */}
      <AllChats />
    </Container>
  );
}

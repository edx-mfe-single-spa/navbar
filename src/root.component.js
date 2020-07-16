import React from "react";
import { Link } from "@reach/router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Root(props) {
  return (
    <header>
      <Navbar>
        <Container>
          <Link to="/search">Find a Course</Link>
        </Container>
      </Navbar>
    </header>
  );
}

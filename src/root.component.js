import React from "react";
import { navigateToUrl } from "single-spa";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Root(props) {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/enterprise" onClick={navigateToUrl}>
            edX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/enterprise" onClick={navigateToUrl}>
                Dashboard
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/profile" onClick={navigateToUrl}>
                My Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

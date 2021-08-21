import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./404.css";

function NotFound(): JSX.Element {
  return (
    <>
      <Container fluid className="fcont">
        <div className="Center-Container">
          <h1 className="NotFoundHeader">404</h1>
          <p className="NotFoundText">Page not found</p>
          <Button href="/" variant="success" className="NotFoundBtn">
            Go home
          </Button>
        </div>
      </Container>
    </>
  );
}

export default NotFound;

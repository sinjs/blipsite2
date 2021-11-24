import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Commands() {
  return (
    <div className="Commands">
      <Container className="text-center my-5">
        <h1>Blip Commands</h1>
        <p style={{ fontSize: 20 + "px" }} className="text-muted lead">
          Please select a category
        </p>
        <Container className="mt-4 CommandCategoies">
          <Button
            href="/commands/mod"
            className="mx-1 my-1 CommandCategory"
            size="lg"
            variant="primary"
          >
            Moderation
          </Button>
          <Button
            href="/commands/music"
            className="mx-1 my-1 CommandCategory"
            size="lg"
            variant="primary"
          >
            Music
          </Button>
          <Button
            href="/commands/radio"
            className="mx-1 my-1 CommandCategory"
            size="lg"
            variant="primary"
          >
            Radio
          </Button>
          <Button
            href="/commands/fun"
            className="mx-1 my-1 CommandCategory"
            size="lg"
            variant="primary"
          >
            Fun
          </Button>
          <Button
            href="/commands/slash"
            className="mx-1 my-1 CommandCategory"
            size="lg"
            variant="primary"
          >
            Slash Commands
          </Button>
          <Button
            href="/commands/other"
            className="mx-1 my-1 CommandCategory"
            size="lg"
            variant="primary"
          >
            Other
          </Button>
        </Container>
      </Container>
    </div>
  );
}

export default Commands;

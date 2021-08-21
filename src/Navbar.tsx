import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function NavBar(): JSX.Element {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark" expand="lg" className="">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/blip.png"
            width="32"
            height="32"
            className="d-inline-block align-top mr-3 bliplogo"
          />
          Blip Bot
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Commands" id="navi-dropdown-cmds">
              <NavDropdown.Item href="/commands/mod">
                Moderation
              </NavDropdown.Item>
              <NavDropdown.Item href="/commands/music">Music</NavDropdown.Item>
              <NavDropdown.Item href="/commands/radio">Radio</NavDropdown.Item>
              <NavDropdown.Item href="/commands/fun">Fun</NavDropdown.Item>
              <NavDropdown.Item href="/commands/other">Other</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/vote">Vote</Nav.Link>
          </Nav>
          <Button
            href="//invite.blip-bot.cf"
            role="button"
            name="invbtn"
            variant="success"
          >
            Invite now!
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

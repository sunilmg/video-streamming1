import React, { Component } from "react";
import { Navbar, Nav, NavBrand, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
        className="bigFont"
      >
        <Navbar.Brand>
          {/* <img src={} width="40px" height="40px" /> */}
          Payments Platform
        </Navbar.Brand>
        <Navbar.Brand>Payments PlayStream</Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse ml-auto>
          <Nav className="ms-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Add">Upload</Nav.Link>

            <NavDropdown title="Videos">
              <NavDropdown.Item href="pb">PAYMENT BYTES</NavDropdown.Item>
              <NavDropdown.Item href="ti">TECHNICAL INSIGHTS</NavDropdown.Item>
              <NavDropdown.Item href="st">SPARK TALK</NavDropdown.Item>
              <NavDropdown.Item href="di">DATA IGNITE</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="promo">etc..</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Help">
              <NavDropdown.Item href="Feedback">FeedBack</NavDropdown.Item>
              <NavDropdown.Item href="FAQ">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="Contact-Us">Contact Us</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="Search">search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

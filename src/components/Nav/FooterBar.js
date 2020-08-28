import React from "react";
import { Navbar, NavbarBrand, Button, ButtonGroup, Nav } from "reactstrap";

export default function NavBar() {

  return (
    <div>
      <Navbar color="dark" dark  id="darkBG" className="clearfix" style={{ padding: '.5rem' }}>
        <NavbarBrand href="/" id="title" className="float-left">
          Not So Pot-Luck
        </NavbarBrand>
        <Nav className="mr-auto float-right" id="footer">
          <ButtonGroup>
            <Button className="bg-login" href="https://not-a-potluck.gebel.tech/" >Home</Button>
            <Button className="bg-login" href="https://not-a-potluck.gebel.tech/about.html">About Us</Button>
            <Button className="bg-login" href="https://not-a-potluck.gebel.tech/themes.html">Theme Ideas</Button>
            <Button className="bg-login" href="https://not-a-potluck.gebel.tech/gallery.html">Gallery</Button>
            <Button className="bg-login" href="https://not-a-potluck.gebel.tech/contact.html">Contact Us</Button>
            <Button className="bg-login" href="https://not-a-potluck.gebel.tech/testimonials.html">Testimonials</Button>
          </ButtonGroup>
        </Nav>
      </Navbar>
    </div>
  );
}

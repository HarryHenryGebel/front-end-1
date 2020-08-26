import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import DashboardNav from "./DashboardNav.jsx";
import MarketingButton from "./MarketingButton.jsx";
import LoginForm from "./LoginForm.jsx";
import RegistrationForm from "./RegistrationForm.jsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // slice of state and pulling login status to display ModalButtons OR DashboardNavs

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          {/*add a space here pushing to opposite sides of screen */}
          <Nav className="mr-auto" navbar>
            <MarketingButton />

            {/* Dynamic Dropdown that only appears after login/registration */}
            <DashboardNav />
          </Nav>
        </Collapse>
        <NavbarBrand href="/">Not Yo Momma's Potluck</NavbarBrand>
        <NavbarToggler onClick={toggle} /> {/* Is this actually needed? or some weird inclusion for the hamburger dropdown?*/}
        <LoginForm />
        <RegistrationForm />
      </Navbar>
    </div>
  );
}

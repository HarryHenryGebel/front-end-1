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
        <NavbarBrand href="/">Not So Pot-Luck</NavbarBrand>
        {/* Collapse will switch everything inside it to hamburger dropdown (NavBarToggler) at smaller screen widths.*/}
        <Collapse isOpen={isOpen} navbar>
          {/*add a space here pushing to opposite sides of screen */}
          <Nav className="mr-auto" navbar>
            <MarketingButton />
            {/* Dynamic Dropdown that only appears after login/registration */}
            <DashboardNav />
          </Nav>
        <LoginForm />
        <RegistrationForm />
        </Collapse>
        <NavbarToggler onClick={toggle} />{" "}
      </Navbar>
    </div>
  );
}

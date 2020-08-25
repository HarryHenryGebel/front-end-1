import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import ModalButton from "./ModalButton";
import DashboardNav from "./DashboardNav";
import MarketingButton from "./MarketingButton";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

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
        <NavbarToggler onClick={toggle} />

        <ModalButton
          buttonLabel="Login"
          buttonColor="bg-addon"
          formComponent={LoginForm()}
        />
        <ModalButton
          buttonLabel="Registration"
          buttonColor="bg-confirm"
          formComponent={RegistrationForm()}
        />
      </Navbar>
    </div>
  );
}

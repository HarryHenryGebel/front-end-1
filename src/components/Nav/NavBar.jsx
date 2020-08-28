import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import DashboardNav from "./DashboardNav.jsx";
import MarketingButton from "./MarketingButton.jsx";
import LoginForm from "./LoginForm.jsx";
import RegistrationForm from "./RegistrationForm.jsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* to revert NavBar colors: keep next line & remove NavBarBrand id */}
      {/* <Navbar color="light" light expand="md"> */}
      <Navbar color="dark" dark expand="md" id="darkBG">
        <NavbarBrand href="/" id="title">
          Not So Pot-Luck
        </NavbarBrand>
        {/* Collapse will switch everything inside it to hamburger dropdown (NavBarToggler) at smaller screen widths.*/}
        <Collapse isOpen={isOpen} navbar>
          {/*add a styling here pushing to opposite sides of screen */}
          <Nav className="mr-auto" navbar>
            <MarketingButton />

            {/* Dynamic Dropdown that only appears after login/registration */}
            {localStorage.getItem("token") ?
            // null
              <DashboardNav />
              :
              <><LoginForm />
              <RegistrationForm /></>}
          </Nav>
        </Collapse>
        <NavbarToggler onClick={toggle} />{" "}
      </Navbar>
    </div>
  );
}
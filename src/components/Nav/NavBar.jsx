import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Jumbotron } from "reactstrap";
import DashboardNav from "./DashboardNav.jsx";
import MarketingButton from "./MarketingButton.jsx";
import LoginForm from "./LoginForm.jsx";
import RegistrationForm from "./RegistrationForm.jsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // slice of state and pulling login status to display ModalButtons OR DashboardNavs
  const [hasAuth, setHasAuth] = useState(false)
  //not an expression?? after resolving current error, next step will be to set up props in loginForm submit button.
  useEffect(() => {
    const DynamicButtons = () => {
      !hasAuth
        ? return (
            <div>
              <LoginForm setHasAuth={setHasAuth}/>
              <RegistrationForm />
            </div>
          )
        : <DashboardNav />
    }
  }, [hasAuth, setHasAuth])

  return (
    <div>
      {/* to revert NavBar colors: keep next line & remove NavBarBrand id */}
      {/* <Navbar color="light" light expand="md"> */}
      <Navbar color="dark" dark expand="md" id="darkBG">
        <NavbarBrand href="/" id="title">Not So Pot-Luck</NavbarBrand>
        {/* Collapse will switch everything inside it to hamburger dropdown (NavBarToggler) at smaller screen widths.*/}
        <Collapse isOpen={isOpen} navbar>
          {/*add a styling here pushing to opposite sides of screen */}
          <Nav className="mr-auto" navbar>
            <MarketingButton />

            {/* Dynamic Dropdown that only appears after login/registration */}
            {DynamicButtons()}


          </Nav>
        </Collapse>
        <NavbarToggler onClick={toggle} />{" "}
      </Navbar>
    </div>
  );
}

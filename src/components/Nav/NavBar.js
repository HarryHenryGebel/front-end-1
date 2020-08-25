import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap"
import ModalButton from "./ModalButton"
import DashboardNav from "./DashboardNav"
import MarketingButton from "./MarketingButton";
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"


export default function NavBar () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
// slice of state and pulling login status to display ModalButtons OR DashboardNavs

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Not Yo Momma's Potluck</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                {/*add a space here pushing to opposite sides of screen */}
                    <Nav className="mr-auto" navbar>
                       <MarketingButton />
                        <ModalButton buttonLabel="Login" buttonColor="primary" formComponent={LoginForm()} />
                        <ModalButton buttonLabel="Registration" buttonColor="danger" formComponent={RegistrationForm()}/>
                        {/* Dynamic Dropdown that only appears after login/registration */}
                       <DashboardNav />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "reactstrap"

export default function NavBar () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Not Yo Momma's Potluck</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                {/*add a space here pushing to opposite sides of screen */}
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            More Info (marketing pgs)
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                        <NavLink href="/components/">Log In</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Register</NavLink>
                        </NavItem>
                        {/* Dynamic Dropdown that only appears after login/registration */}
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    )
}


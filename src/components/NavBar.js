import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"


export default function NavBar (props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);


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
                            Testimonials
                            </DropdownItem>
                            <DropdownItem>
                            Theme Ideas
                            </DropdownItem>
                            <DropdownItem>
                            About
                            </DropdownItem>
                            <DropdownItem>
                            Contact
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Home
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>

                        <Button color="danger" onClick={toggleModal}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

                        <NavItem>
                            <NavLink href="">Log In</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink href="">Register</NavLink>
                        </NavItem>
                        {/* Dynamic Dropdown that only appears after login/registration */}
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            AfterLoginMenu
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Upcoming Event1
                            </DropdownItem>
                            <DropdownItem>
                            Upcoming Event2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Logout
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import EventInvitation from "../EventInvitation";
import EditUser from '../forms/EditUser'
import { Link } from "react-router-dom";

export default function DashboardNav() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [userModal, setuserModal] = useState(false);
  const userToggle = () => setuserModal(!userModal);

  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          AfterLoginMenu
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick = {userToggle}>
            Update Profile
          </DropdownItem>
          {/* map over upcoming events with dropdown and dynamic link */}
          <DropdownItem>
            {/*Dynamic Link Here <Link to = {`/event/${id}`}>Upcoming Event1</Link> */}
            <Link to="/event/id">Event1</Link>
          </DropdownItem>
          {/* if unresponded invitation, map and show alert */}
          <DropdownItem onClick={toggleModal}>Event Invitations</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <Modal isOpen={modal} toggle={toggleModal}>
        <EventInvitation />
      </Modal>

      <Modal isOpen={userModal} toggle={userToggle}>
        <ModalHeader toggle={userToggle}>
          <h2>Update Information</h2>
        </ModalHeader>
        <ModalBody>
          <EditUser />
        </ModalBody>
        <ModalFooter>
          <Button className="bg-cancel" onClick={userToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

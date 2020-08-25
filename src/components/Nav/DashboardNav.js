import React, {useState} from "react"
import {Modal, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import EventInvitation, {} from '../EventInvitation'
export default function DashboardNav () {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          AfterLoginMenu
        </DropdownToggle>
        <DropdownMenu right>
          {/* map over upcoming events with dropdown and dynamic link */}
          <DropdownItem>
            Upcoming Event1
          </DropdownItem>
      {/* if unresponded invitation, map and show alert */}
      <DropdownItem onClick = {toggleModal}>
            Event Invitations
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <Modal isOpen={modal} toggle={toggleModal}>
        <EventInvitation />
      </Modal>
    </div>
  )
}


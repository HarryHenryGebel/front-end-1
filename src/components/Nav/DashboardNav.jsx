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
import EditUser from "../forms/EditUser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    potlucks: state.potlucks,
    primaryEmail: state.primaryEmail,
  };
};

//potlucks

function DashboardNav(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [userModal, setuserModal] = useState(false);
  const userToggle = () => setuserModal(!userModal);
  const [createEModal, setCreateEModal] = useState(false);
  const createEToggle = () => setCreateEModal(!createEModal);

  let newInvites = [];

  function eventFinder() {
    for (let i = 0; i < props.potlucks.length; i++) {
      for (let j = 0; j < props.potlucks[i].guests.length; j++) {
        console.log();
        if (
          props.primaryEmail === props.potlucks[i].guests[j].primaryEmail &&
          props.potlucks[i].guests[j].responded === false
        ) {
          newInvites.push(props.potlucks[i]);
        }
      }
    }
  }

  eventFinder();

  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          AfterLoginMenu
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem onClick={createEToggle} >Create Event</DropdownItem>
          <DropdownItem onClick={userToggle}>Update Profile</DropdownItem>
          {props.potlucks.length > 0
            ? props.potlucks.map((potluck) => (
                <DropdownItem key={potluck.potluckId}>
                  <Link to={`/event/${potluck.potluckId}`}>
                    {potluck.eventName}
                  </Link>
                </DropdownItem>
              ))
            : null}

          {/* show alert? */}
          {newInvites.map((invite) => (
            <DropdownItem key={invite.potluckId} onClick={toggleModal}>
              {invite.eventName}
              <Modal isOpen={modal} toggle={toggleModal}>
                <EventInvitation key={invite.potluckId} potluck={invite} />
              </Modal>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

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

      <Modal isOpen={createEModal} toggle={createEToggle}>
        <ModalHeader toggle={createEToggle}>
          <h2>Create Event</h2>
        </ModalHeader>
        <ModalBody>
          <EditUser />
        </ModalBody>
        <ModalFooter>
          <Button className="bg-cancel" onClick={createEToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps, {})(DashboardNav);

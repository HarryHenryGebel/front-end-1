import React, { useState, useEffect } from "react";
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
    primaryemail: state.primaryemail,
  };
};

//potlucks

function DashboardNav(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [userModal, setuserModal] = useState(false);
  const userToggle = () => setuserModal(!userModal);

  let newInvites = [];

  function eventFinder() {
    for (let i = 0; i < props.potlucks.length; i++) {
      for (let j = 0; j < props.potlucks[i].guests.length; j++) {
        console.log();
        if (
          props.primaryemail === props.potlucks[i].guests[j].primaryemail &&
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
          <DropdownItem onClick={userToggle}>Update Profile</DropdownItem>
          {props.potlucks.length > 0
            ? props.potlucks.map((potluck) => (
                <DropdownItem key={potluck.potluckid}>
                  <Link to={`/event/${potluck.potluckid}`}>
                    {potluck.eventname}
                  </Link>
                </DropdownItem>
              ))
            : null}

          {/* show alert? */}
          {newInvites.length > 0
            ? newInvites.map((invite) => (
                <DropdownItem key={invite.id} onClick={toggleModal}>
                  {invite.eventname}
                  <Modal isOpen={modal} toggle={toggleModal}>
                    <EventInvitation key={invite.potluckid} potluck={invite} />
                  </Modal>
                </DropdownItem>
              ))
            : null}

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
    </div>
  );
}

export default connect(mapStateToProps, {})(DashboardNav);

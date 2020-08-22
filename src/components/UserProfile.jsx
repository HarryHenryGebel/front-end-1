import React, { useState } from "react";
import {
  Jumbotron,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import EditUser from "./EditUser";
import Event from "./Event";
//All userInformation stored on Profile Page
//Next user
//Open user-Card for more information
//Update Profile

function UserProfile() {
  const [userModal, setuserModal] = useState(false);
  const userToggle = () => setuserModal(!userModal);

  const [eventModal, setEventModal] = useState(false);
  const eventToggle = () => setEventModal(!eventModal);

  return (
    <>
      <Jumbotron>
        <img src="https://picsum.photos/200" alt="happy user" />
        <h1 className="display-3">Hello, user!</h1>

        <hr className="my-2" />
        <p>Your next user is in number of days, at time!</p>
        <p className="lead">
          <Button color="primary" onClick={eventToggle}>
            Learn More
          </Button>
        </p>
      </Jumbotron>
      <Container>
        User's Address, phone number, email and list of users (linking to
        userpage) will go here.
        <Button color="primary" onClick={userToggle}>
          Update Information
        </Button>
      </Container>

      <Modal isOpen={userModal} toggle={userToggle}>
        <ModalHeader toggle={userToggle}>Modal title</ModalHeader>
        <ModalBody>
          <EditUser />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={userToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={eventModal} toggle={eventToggle}>
        <ModalHeader toggle={eventToggle}>Modal title</ModalHeader>
        <ModalBody>
          <Event />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={eventToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default UserProfile;

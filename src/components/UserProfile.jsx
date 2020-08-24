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
        <p>Your next event is in number of days, at time!</p>
        <p className="lead">
          <Button className="bg-addon" onClick={eventToggle}>
            Learn More
          </Button>
        </p>
      </Jumbotron>
      <Container>
        User's Address, phone number, email and list of users (linking to
        userpage) will go here.
        <Button className="bg-addon" onClick={userToggle}>
          Update Information
        </Button>
      </Container>

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

      <Modal isOpen={eventModal} toggle={eventToggle}>
        <ModalHeader toggle={eventToggle}>
          <h2>Event Information</h2>
        </ModalHeader>
        <ModalBody>
          <Event />
        </ModalBody>
        <ModalFooter>
          <Button className="bg-cancel" onClick={eventToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default UserProfile;

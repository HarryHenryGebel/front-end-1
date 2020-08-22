import React, {useState} from "react";
import { Jumbotron, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditUser from './EditUser'
//All userInformation stored on Profile Page
//Next Event
//Create Event
//Update Event
//Update Profile

function UserProfile() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (
    <>
      <Jumbotron>
          <img src = "https://picsum.photos/200" alt= "happy user" />
        <h1 className="display-3">Hello, user!</h1>
        
        <hr className="my-2" />
        <p>
          Your next event is in number of days, at time!
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Container>
          User's Address, phone number, email and list of events (linking to eventpage) will go here.
          <Button color="danger" onClick={toggle}>Update Information</Button>
      </Container>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
<EditUser />
        </ModalBody>
        <ModalFooter>

          <Button color="primary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default UserProfile;

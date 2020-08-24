//Will display for Guest when invited to Event
//Will have ability to Accept or Reject RSVP
//Will have ability to select foodItem via dropdown
//Will contain information of Host, Location, Date, Time and Missing Menu Items
//Will sprout from Dashboard NavBar
//Alert should popup to confirm attendance/rejection --code Alerts later
//Alert Text "You have told Host you are not attending" "You are confirmed to attend event at location at time, and will be bringing fooditem"

import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function EventInvitation() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Event Name</CardTitle>
          <CardSubtitle>Date, Time, Location</CardSubtitle>
          <CardText>You have been invited to HostName's Event!</CardText>
          <CardText>Event will be held on Date at Time at Location.</CardText>
          <CardText>Please Respond in a Timely Manner</CardText>
          <Button color="primary" onClick={toggle}>
            Attending
          </Button>
          <Button color="danger">Regretfully Cannot</Button>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>What will you be bringing?</ModalHeader>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button color="primary">Confirm</Button>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default EventInvitation;

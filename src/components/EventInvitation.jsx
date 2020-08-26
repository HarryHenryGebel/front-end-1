//Will display for Guest when invited to Event
//Will have ability to Accept or Reject RSVP
//Will have ability to select foodItem via dropdown
//Will contain information of Host, {potluck.location}, {potluck.date}, Time and Missing Menu Items
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
import { updateEvent } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { primaryEmail: state.primaryEmail };
};

function EventInvitation(props) {
  const { potluck, primaryEmail } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let foundId = "";

  function guestIdFinder() {
    for (let i = 0; i < potluck.guests.length; i++) {
      if (potluck.guests[i].primaryEmail === primaryEmail) {
        foundId = potluck.guests[i].guestId;
      }
    }
  }

  guestIdFinder();

  const formValues = {
    guestId: foundId,
    responded: false,
    isAttending: false,
    isBringing: [],
  };

  const [guestForm, setGuestForm] = useState(formValues);

  const attendanceHandler = (e) => {
    setGuestForm({
      ...guestForm,
      responded: true,
      isAttending: true,
      isBringing: [...guestForm.isBringing, e.target.value],
    });
  };

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
          <CardTitle>
            <h2>{potluck.eventName}</h2>
          </CardTitle>
          <CardSubtitle>
            {potluck.date}, {potluck.time}, {potluck.location}
          </CardSubtitle>
          <CardText>You have been invited to an event!</CardText>
          <CardText>
            Event will be held on {potluck.date} at {potluck.time} at{" "}
            {potluck.location}.
          </CardText>
          <CardText>Please Respond in a Timely Manner</CardText>
          <Button className="bg-confirm" onClick={toggle}>
            Attending
          </Button>
          <Button className="bg-cancel">Regretfully Cannot</Button>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>What will you be bringing?</ModalHeader>
        <Form>
          <FormGroup>
            <Label htmlFor="isBringing">Select</Label>
            <Input
              type="select"
              name="isBringing"
              id="isBringing"
              onChange={attendanceHandler}
            >
              <option>Please Select</option>
              {potluck.foods
                .filter((food) => food.isClaimed === false)
                .map((food) => (
                  <option key={food.foodId} value={food.foodId}>
                    {food.foodName}
                  </option>
                ))}
            </Input>
          </FormGroup>
          <Button className="bg-confirm">Confirm</Button>{" "}
          <Button className="bg-cancel" onClick={toggle}>
            Cancel
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps, { updateEvent })(EventInvitation);

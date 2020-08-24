import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateEvent } from "../actions";
import { connect } from "react-redux";
//Form Validation (same as createEvent)

function EditEvent(props) {
  const {
    /*host,*/ eventname,
    date,
    time /*location, description foods, guests*/,
  } = props;

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleName">Event Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              defaultValue={eventname}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="examplePhonenumber">Phone Number?</Label>
            <Input
              type="Phonenumber"
              name="Phonenumber"
              id="examplePhonenumber"
              defaultValue="Phonenumber defaultValue"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label htmlFor="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          defaultValue="1234 Main St"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          defaultValue="Apartment, studio, or floor"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label htmlFor="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label htmlFor="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              defaultValue={date}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              defaultValue={time}
            />
          </FormGroup>
        </Col>
      </Row>
      {/* Show List of Guests on list Here, click to remove? */}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleGuestName">Guest Name</Label>
            <Input
              type="name"
              name="guestName"
              id="exampleGuestName"
              defaultValue="with a defaultValue"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleGuestPhonenumber">
              Phone Number? or Email?
            </Label>
            <Input
              type="Phonenumber"
              name="Phonenumber"
              id="examplePhonenumber"
              defaultValue="Phonenumber defaultValue"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button className="bg-addon">Add Guest</Button>
      {/* Show List of Food Items on list Here, click to remove? */}
      <FormGroup>
        <Label htmlFor="exampleFoodName">Food Name</Label>
        <Input
          type="name"
          name="name"
          id="exampleFoodName"
          defaultValue="name"
        />
      </FormGroup>{" "}
      <Button className="bg-addon">Add Menu Item</Button>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label htmlFor="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>
      <Button className="bg-confirm">Update Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { updateEvent })(EditEvent);

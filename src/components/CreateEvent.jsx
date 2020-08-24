import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { createEvent } from "../actions";
//Form Validation?

//Use Add button to populate a list for Food and Guests

function CreateEvent() {
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
              placeholder="with a placeholder"
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
              placeholder="Phonenumber placeholder"
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
          placeholder="1234 Main St"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          placeholder="Apartment, studio, or floor"
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
              placeholder="with a placeholder"
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
              placeholder="time placeholder"
            />
          </FormGroup>
        </Col>
      </Row>
      {/* Show List of Guests added Here, can we click to remove guests? */}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleGuestName">Guest Name</Label>
            <Input
              type="name"
              name="guestName"
              id="exampleGuestName"
              placeholder="with a placeholder"
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
              placeholder="Phonenumber placeholder"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button className="bg-addon">Add Guest</Button>
      {/* Show List of Food Items added Here, can we click to remove food? */}
      <FormGroup>
        <Label htmlFor="exampleFoodName">Food Name</Label>
        <Input
          type="name"
          name="name"
          id="exampleFoodName"
          placeholder="name"
        />
      </FormGroup>{" "}
      <Button className="bg-addon">Add Menu Item</Button>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label htmlFor="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>
      <Button className="bg-confirm">Create Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { createEvent })(CreateEvent);

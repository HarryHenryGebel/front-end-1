import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { createEvent } from "../actions";
//Form Validation?

//Use Add button to populate a list for Food and Guests

function CreateEvent() {
const initialForm = {
  potluckid:'',
  eventname: ``,
  date: '',
  time: '',
  location: ``,
  description:``,
  foods: [],
  guests: []
}

const [formValues, setFormValues] = useState(initialForm)

const changeHandler = (e) => {
  setFormValues({...formValues, [e.target.name]: e.target.value})
}



  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Event Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="with a placeholder"
              value = {formValues.eventname}
              onChange = {changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePhonenumber">Phone Number?</Label>
            <Input
              type="Phonenumber"
              name="Phonenumber"
              id="examplePhonenumber"
              placeholder="Phonenumber placeholder"
              onChange = {changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          placeholder="1234 Main St"
          onChange = {changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
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
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" onChange = {changeHandler}/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" onChange = {changeHandler} />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" onChange = {changeHandler}/>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleDate" >Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="with a placeholder"
              value = {formValues.date}
              onChange = {changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
              value = {formValues.time}
              onChange = {changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
      <Col md={2}>
          <FormGroup>
            <Label for="exampleDescription">Description</Label>
            <Input onChange = {changeHandler} type="text" name="description" id="exampleDescription" value = {formValues.description}/>
          </FormGroup>
        </Col>
      </Row>
      {/* Show List of Guests added Here, can we click to remove guests? */}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleGuestName">Guest Name</Label>
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
            <Label for="exampleGuestPhonenumber">Phone Number? or Email?</Label>
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
        <Label for="exampleFoodName">Food Name</Label>
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
        <Label for="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>
      <Button className="bg-confirm">Create Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { createEvent })(CreateEvent);

import React, {useState} from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateEvent } from "../actions";
import { connect } from "react-redux";
//Form Validation (same as createEvent)

function EditEvent(props) {
  const {/*host,*/ eventname, date, time, description, location, /*foods, guests*/} = props;
  const initialForm = {
    potluckid:'', //potluckid?
    eventname: {eventname},
    date: {date},
    time: {time},
    location: {location},
    description:{description},
    foods: [],//foods
    guests: []//guests
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
              defaultValue={initialForm.eventname}
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
              defaultValue="Phonenumber defaultValue"
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
          defaultValue="1234 Main St"
          onChange = {changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          defaultValue="Apartment, studio, or floor"
          onChange = {changeHandler}
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
            <Input type="text" name="state" id="exampleState" onChange = {changeHandler}/>
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
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              defaultValue={initialForm.date}
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
              defaultValue={initialForm.time}
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
      {/* Show List of Guests on list Here, click to remove? */}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleGuestName">Guest Name</Label>
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
            <Label for="exampleGuestPhonenumber">Phone Number? or Email?</Label>
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
        <Label for="exampleFoodName">Food Name</Label>
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
        <Label for="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>
      <Button className="bg-confirm">Update Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { updateEvent })(EditEvent);

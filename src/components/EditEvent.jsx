import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText, CardFooter } from "reactstrap";
import { updateEvent } from "../actions";
import { connect } from "react-redux";
//Form Validation (same as createEvent)

function EditEvent(props) {
  const {
    /*host,*/ eventname,
    date,
    time,
    description,
    location, foods, guests,
  } = props;

  const locationForm = {
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  };

  const guestForm = {
    id: "",
    fname: "",
    lname: "",
    primaryemail: "",
  };

  const foodForm = {
    foodid: "",
    foodname: "",
    description: "",
  };

  const [food, setFood] = useState(foodForm);
  const [concatLocation, setConcatLocation] = useState(locationForm);
  const [guest, setGuests] = useState(guestForm);

  const initialForm = {
    potluckid: "",
    eventname: ``,
    date: "",
    time: "",
    location: `${concatLocation.address} ${concatLocation.address2} ${concatLocation.city}, ${concatLocation.state} ${concatLocation.zip}`,
    description: ``,
    foods: [],
    guests: [],
  };

  const [formValues, setFormValues] = useState(initialForm);

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const guestChangeHandler = (e) => {
    setGuests({ ...guest, [e.target.name]: e.target.value });
  };

  const foodChangeHandler = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const changeLocationHandler = (e) => {
    setConcatLocation({ ...concatLocation, [e.target.name]: e.target.value });
  };

  const addGuest = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, guests: [...formValues.guests, guest] });
    setGuests(guestForm);
  };

  const addFood = (e) => {
    e.preventDefault();
    setFormValues({ formValues, foods: [formValues.foods, food] });
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleName">Event Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleName"
              placeholder="with a placeholder"
              defaultValue = {eventname}
              value={formValues.eventname}
              onChange={changeHandler}
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
              onChange={changeHandler}
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
          defaultValue = {location}
          value={concatLocation.address}
          onChange={changeLocationHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          placeholder="Apartment, studio, or floor"
          value={concatLocation.address2}
          onChange={changeLocationHandler}
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleCity">City</Label>
            <Input
              type="text"
              name="city"
              id="exampleCity"
              value={concatLocation.city}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label htmlFor="exampleState">State</Label>
            <Input
              type="text"
              name="state"
              id="exampleState"
              value={concatLocation.state}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label htmlFor="exampleZip">Zip</Label>
            <Input
              type="text"
              name="zip"
              id="exampleZip"
              value={concatLocation.zip}
              onChange={changeLocationHandler}
            />
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
              value={formValues.date}
              onChange={changeHandler}
              defaultValue = {date}
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
              value={formValues.time}
              onChange={changeHandler}
              defaultValue = {time}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleDescription">Description</Label>
            <Input
              onChange={changeHandler}
              type="text"
              name="description"
              id="exampleDescription"
              value={formValues.description}
              defaultValue = {description}
            />
          </FormGroup>
        </Col>
      </Row>
      {formValues.guests.length > 0
        ? formValues.guests.map((guest) => (
            <Card>
              <CardBody>
                <CardText>
                  {guest.fname} {guest.lname}
                </CardText>
                <CardText>{guest.primaryemail}</CardText>
                <CardFooter>
                  <Button className=".bg-cancel">Remove</Button>
                </CardFooter>
              </CardBody>
            </Card>
          ))
        : null}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="fname">First Name</Label>
            <Input
              type="text"
              name="fname"
              id="fname"
              placeholder="with a placeholder"
              value={guest.fname}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="lname">Last Name</Label>
            <Input
              type="text"
              name="lname"
              id="lname"
              placeholder="with a placeholder"
              value={guest.lname}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Guestemail">Email</Label>
            <Input
              type="email"
              name="primaryemail"
              id="email"
              placeholder="email placeholder"
              value={guest.primaryemail}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button onSubmit={addGuest} className="bg-addon">
        Add Guest
      </Button>
      {formValues.foods.length > 0
        ? formValues.foods.map((food) => <Card>
        <CardBody>
          <CardText>
            {food.name}
          </CardText>
          <CardText>{food.description}</CardText>
          <CardFooter>
            <Button className=".bg-cancel">Remove</Button>
          </CardFooter>
        </CardBody>
      </Card>)
        : null}
      <FormGroup>
        <Label htmlFor="exampleFoodName">Food Name</Label>
        <Input
          type="text"
          name="foodname"
          id="exampleFoodName"
          placeholder="name"
          onChange={foodChangeHandler}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label htmlFor="exampleFoodName">Special Information:</Label>
        <Input
          type="text"
          name="description"
          id="exampleFoodName"
          placeholder="name"
          onChange={foodChangeHandler}
        />
      </FormGroup>
      <Button className="bg-addon" onSubmit={addFood}>
        Add Menu Item
      </Button>
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

export default connect(null, { updateEvent })(EditEvent);

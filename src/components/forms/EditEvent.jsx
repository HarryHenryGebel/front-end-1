import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText, CardFooter } from "reactstrap";
import { updateEvent } from "../../actions";
import { connect } from "react-redux";
//Form Validation (same as createEvent)

function EditEvent(props) {
  const {
    /*host,*/ eventname,
    date,
    time,
    description,
    location, /*foods, guests,*/
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
    setFormValues({...formValues, location: `${concatLocation.address} ${concatLocation.address2} ${concatLocation.city}, ${concatLocation.state} ${concatLocation.zip}`})
  };

  const addGuest = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, guests: [...formValues.guests, guest] });
    setGuests(guestForm);
  };

  const addFood = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, foods: [...formValues.foods, food] });
  };



  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Name">Event Name</Label>
            <Input
              type="text"
              name="eventname"
              id="Name"
              placeholder="with a placeholder"
              defaultValue = {eventname}
              value={formValues.eventname}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label htmlFor="Address">Address</Label>
        <Input
          type="text"
          name="address"
          id="Address"
          placeholder="1234 Main St"
          defaultValue = {location}
          value={concatLocation.address}
          onChange={changeLocationHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="Address2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="Address2"
          placeholder="Apartment, studio, or floor"
          value={concatLocation.address2}
          onChange={changeLocationHandler}
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="City">City</Label>
            <Input
              type="text"
              name="city"
              id="City"
              value={concatLocation.city}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label htmlFor="State">State</Label>
            <Input
              type="text"
              name="state"
              id="State"
              value={concatLocation.state}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label htmlFor="Zip">Zip</Label>
            <Input
              type="text"
              name="zip"
              id="Zip"
              value={concatLocation.zip}
              onChange={changeLocationHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Date">Date</Label>
            <Input
              type="date"
              name="date"
              id="Date"
              placeholder="with a placeholder"
              value={formValues.date}
              onChange={changeHandler}
              defaultValue = {date}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Time">Time</Label>
            <Input
              type="time"
              name="time"
              id="Time"
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
            <Label htmlFor="Description">Description
            <Input
              onChange={changeHandler}
              type="text"
              name="description"
              id="Description"
              value={formValues.description}
              defaultValue = {description}
            />
            </Label>
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
            <Label htmlFor="GuestEmail">Email</Label>
            <Input
              type="text"
              name="primaryemail"
              id="GuestEmail"
              placeholder="email placeholder"
              value={guest.primaryemail}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={addGuest} className="bg-addon">
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
        <Label htmlFor="FoodName">Food Name</Label>
        <Input
          type="text"
          name="foodname"
          id="FoodName"
          placeholder="name"
          value = {food.foodname}
          onChange={foodChangeHandler}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label htmlFor="FoodName">Special Information:</Label>
        <Input
          type="text"
          name="description"
          id="FoodName"
          placeholder="name"
          value = {food.description}
          onChange={foodChangeHandler}
        />
      </FormGroup>
      <Button className="bg-addon" onClick={addFood}>
        Add Menu Item
      </Button>
      <FormGroup check>
        <Input type="checkbox" name="check" id="Check" />
        <Label htmlFor="Check" check>
          Confirm
        </Label>
      </FormGroup>
      <Button className="bg-confirm">Update Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { updateEvent })(EditEvent);

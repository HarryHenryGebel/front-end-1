import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateEvent } from "../../actions";
import { connect } from "react-redux";
import {useForm} from "../../utils/";
import Guest from "../items/Guest";
import Food from "../items/Food";

//Form Validation (same as createEvent)

function EditEvent(props) {
  const {
    /*host,*/ eventName,
    date,
    time,
    description,
    location /*foods, guests,*/,
  } = props;

  const {
    food,
    concatLocation,
    guest,
    formValues,
    changeHandler,
    changeLocationHandler,
    guestChangeHandler,
    foodChangeHandler,
    addGuest,
    addFood,
  } = useForm();

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Name">Event Name</Label>
            <Input
              type="text"
              name="eventName"
              id="Name"
              placeholder="with a placeholder"
              defaultValue={eventName}
              value={formValues.eventName}
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
          defaultValue={location}
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
              defaultValue={date}
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
              defaultValue={time}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Description">
              Description
              <Input
                onChange={changeHandler}
                type="text"
                name="description"
                id="Description"
                value={formValues.description}
                defaultValue={description}
              />
            </Label>
          </FormGroup>
        </Col>
      </Row>
      {formValues.guests.map((guest) => (
        <>
          <Guest
            key={guest.guestId}
            firstName={guest.firstName}
            lastName={guest.lastName}
            primaryEmail={guest.primaryEmail}
          />
          <Button className="bg-cancel">Remove</Button>
        </>
      ))}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="with a placeholder"
              value={guest.firstName}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="with a placeholder"
              value={guest.lastName}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="GuestEmail">Email</Label>
            <Input
              type="text"
              name="primaryEmail"
              id="GuestEmail"
              placeholder="email placeholder"
              value={guest.primaryEmail}
              onChange={guestChangeHandler}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={addGuest} className="bg-addon">
        Add Guest
      </Button>
      {formValues.foods.map((food) => (
        <>
          <Food key={food.foodId} foodName={food.foodName} />
          <Button className="bg-cancel">Remove</Button>
        </>
      ))}
      <FormGroup>
        <Label htmlFor="FoodName">Food Name</Label>
        <Input
          type="text"
          name="foodName"
          id="FoodName"
          placeholder="name"
          value={food.foodName}
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
          value={food.description}
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

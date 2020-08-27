import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { createEvent } from "../../actions";
import { useForm } from "../../utils";
import Guest from "../items/Guest";
import Food from "../items/Food";
//Form Validation?

//Use Add button to populate a list htmlFor Food and Guests

function CreateEvent() {
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
    foodRemover,
    guestRemover,
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
              value={formValues.eventName}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="email">Phone Number?</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email placeholder"
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
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Description">Description</Label>
            <Input
              onChange={changeHandler}
              type="text"
              name="description"
              id="Description"
              value={formValues.description}
            />
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
          <Button
            onClick={() => {
              guestRemover(guest.firstName);
            }}
            className="bg-cancel"
          >
            Remove
          </Button>
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
            <Label htmlFor="Guestemail">Email</Label>
            <Input
              type="email"
              name="primaryEmail"
              id="email"
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
      {console.log(formValues.foods)}
      {formValues.foods.map((food) => (
        <>
          <Food key={food.foodId} foodName={food.foodName} />
          <Button
            onClick={(e) => {
              foodRemover(food.foodName);
            }}
            className="bg-cancel"
          >
            Remove
          </Button>
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
        <Label htmlFor="Description">Special Information:</Label>
        <Input
          type="text"
          name="description"
          id="Description"
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
      <Button className="bg-confirm">Create Event</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default connect(null, { createEvent })(CreateEvent);

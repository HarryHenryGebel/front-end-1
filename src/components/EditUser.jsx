import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

function EditUser() {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="exampleName">Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              defaultValue="with a defaultValue"
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
      <FormGroup>
        <Label htmlFor="password">
          {" "}
          Password:
          <Input type="password" name="password" id="password" />
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label htmlFor="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>

      <Button className="bg-confirm">Update User</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default EditUser;

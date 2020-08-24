import React from 'react'
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap'



function EditUser(){
    return(
<Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
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
            <Label for="examplePhonenumber">Phone Number?</Label>
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
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          defaultValue="1234 Main St"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
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
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
      <Label for = "password"> Password: 
      <Input type = "password" name="password" id = "password" />
      </Label>
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label for="exampleCheck" check>
          Confirm
        </Label>
      </FormGroup>
      
      <Button className = "bg-confirm">Update User</Button>
      <Button className = "bg-cancel">Cancel</Button>
    </Form>
    )
}

export default EditUser
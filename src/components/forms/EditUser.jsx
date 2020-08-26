import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

function EditUser() {
  const initialForm = {
    userId: "",
    username: "",
    password: "",
    primaryEmail: "",
    imageUrl: null,
  };

  const [user, setUser] = useState(initialForm);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="Name">Name</Label>
            <Input
              type="text"
              name="username"
              id="Name"
              defaultValue="with a defaultValue"
              value={user.username}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="email">email</Label>
            <Input
              type="email"
              name="primary"
              id="email"
              defaultValue="email defaultValue"
              value={user.primaryEmail}
              onChange={changeHandler}
            />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label htmlFor="password">
          {" "}
          Password:
          <Input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={changeHandler}
          />
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" name="check" id="Check" />
        <Label htmlFor="Check" check>
          Confirm
        </Label>
      </FormGroup>

      <Button className="bg-confirm">Update User</Button>
      <Button className="bg-cancel">Cancel</Button>
    </Form>
  );
}

export default EditUser;

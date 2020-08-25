import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function LoginForm () {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="email" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="email" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="password" placeholder="don't share me!" />
      </FormGroup>
    </Form>
  );
}
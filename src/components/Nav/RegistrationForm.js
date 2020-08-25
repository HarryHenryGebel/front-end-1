import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function RegistrationForm () {
  return (
    <Form>
      <FormGroup>
        <Label for="usename">Username</Label>
        <Input type="username" name="username" id="username" placeholder="Public Username Here" />
        <FormText>Your username can be seen by others &amp; is required.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="Memorable Password Here" />
        <FormText>Needs at least 6 characters &amp; is required.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="your@email.com" />
        <FormText>Required. We will never send spam.</FormText>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          I Agree to Terms of Service and promise to be a nice human.
        </Label>
        <FormText>After logging in, you may edit more profile options.</FormText>
      </FormGroup>
    </Form>
  );
}
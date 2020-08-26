import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import {useHistory} from 'react-router-dom'
//push /dashboard
export default function RegistrationForm () {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <div>
    <Button className="bg-confirm" onClick={toggleModal}>Registration</Button>
    <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Registration</ModalHeader>
      <ModalBody>
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
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>Submit</Button>{' '}
      </ModalFooter>
    </Modal>
  </div>
  );
}
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as yup from "yup"
//import {useHistory} from 'react-router-dom'
//push /
export default function LoginForm() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    terms: true
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const formSubmit = () => {}
  const inputChange = (e) => {
    const newFormData = {
      ...formState, [e.target.name]: e.target.value
    };
    //validateChange(e);
    setFormState(newFormData)
  }
  return (
    <div>
      <Button className="bg-addon" onClick={toggleModal}>Login</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form inline onSubmit={formSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label htmlFor="email" className="mr-sm-2">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={inputChange}
                placeholder="something@idk.cool"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label htmlFor="password" className="mr-sm-2">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                placeholder="don't share me!"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            type="submit"
            disabled={buttonDisabled}
            onClick={toggleModal}
          >Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { loginSchema } from "./yupSchemas"
import * as yup from "yup"
import axios from "axios"
import AlertRed from "../AlertRed.jsx"
//import {useHistory} from 'react-router-dom'
//push /
export default function LoginForm({setHasAuth, hasAuth}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log('form state change')
    loginSchema.isValid(formState).then(valid => {
      // console.log('valid?', valid)
			setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    setFormState({
      email: "",
      password: ""
    });
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data);
        console.log("success", post);
        setHasAuth(true)
      })
      .catch(err => console.log(err.response));
  }

  const validateChange = e => {
    yup
      .reach(loginSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({...errors, [e.target.name]: ""});
        console.log('ERRORS', errors)
      })
      .catch(err => {
        setErrors({...errors, [e.target.name]: err.errors[0]});
        console.log('ERRORS', errors, errors.email.length)
      });
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState, [e.target.name]: e.target.value
    };
    validateChange(e);
    setFormState(newFormData)
  }


  return (
    <div>
      <Button className="bg-addon" onClick={toggleModal}>Login</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        {/* using this outer placement of Form lets the submit button properly POST, but totally ruins the layout. */}
      {/* <Form inline onSubmit={formSubmit}> */}
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={formSubmit}>
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
              {/* for the love of potlucks, style these to go fit in the modal */}
              {errors.email.length > 0
                ? <AlertRed message={<p className="error">{errors.email}</p>}/>
                : null}
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
              {/* for the love of potlucks, style these to go fit in the modal */}
              {errors.password.length > 0 ?
                <AlertRed message={<p className="error">{errors.password}</p>}/>
                : null}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
        <pre>{JSON.stringify(post, null, 2)}</pre>
          <Button
            color="primary"
            type="submit"
            disabled={buttonDisabled}
            // Temp disabled to test submit button posting
            // onClick={toggleModal}
          >Submit</Button>{' '}
        </ModalFooter>
        {/* </Form> */}
      </Modal>
    </div>
  )
}

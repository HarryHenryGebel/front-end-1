import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { loginSchema } from "./yupSchemas";
import * as yup from "yup";
import axios from "axios";
import AlertRed from "../AlertRed.jsx";
import axiosWithAuth from "../../utils/axiosWithAuth"
import {useHistory} from 'react-router-dom'
//push /
export default function LoginForm({setHasAuth}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [post, setPost] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // console.log('form state change')
    loginSchema.isValid(formState).then((valid) => {
      // console.log('valid?', valid)
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    const user = {
      username: formState.username.trim(),
      password: formState.password.trim()
    }
    setFormState({
      username: "",
      password: "",
    });
    axiosWithAuth()
    .post('/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
      headers: {
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.access_token)
      history.push('/')
    })
    .catch(e => {
      console.log("its so broken forever", e)
      throw e
    })
  };

  const validateChange = (e) => {
    yup
      .reach(loginSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
        // console.log('Yup.then ERRORS', errors)
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
        // console.log('Yup.catch ERRORS', errors)
      });
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <div>
      <Button className="bg-addon" onClick={toggleModal}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <form onSubmit={formSubmit}>
          <ModalHeader toggle={toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label htmlFor="username" className="mr-sm-2">
                  Username
                </Label>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  value={formState.username}
                  onChange={inputChange}
                  placeholder="That thing you called yourself"
                />
                {errors.username.length > 0 ? (
                  <AlertRed message={<p className="error">{errors.username}</p>} />
                ) : null}
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
                {errors.password.length > 0 ? (
                  <AlertRed
                    message={<p className="error">{errors.password}</p>}
                  />
                ) : null}
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* delete once submit is working properly */}
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <Button
              color="primary"
              type="submit"
              disabled={buttonDisabled}
              onClick={toggleModal}
            >
              Submit
            </Button>{" "}
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

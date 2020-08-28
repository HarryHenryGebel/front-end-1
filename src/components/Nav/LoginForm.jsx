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
import { axiosWithAuth } from '../../utils'
import AlertRed from "../AlertRed.jsx";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'





export const USER_LOGIN = "USER_LOGIN"
export default function LoginForm({setHasAuth}) {
  const history = useHistory();
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

  useEffect(() => {
    // console.log('form state change')
    loginSchema.isValid(formState).then((valid) => {
      // console.log('valid?', valid)
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => dispatch =>{
    e.preventDefault();
    axiosWithAuth()
        .post('/login', `grant_type=password&username=${formState.username}&password=${formState.password}`, {
          headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(res => {

          localStorage.setItem('token', res.data.access_token)
          localStorage.setItem('username', formState.username)
          history.push('/')
          setFormState({
            username: "",
            password: "",
          })
          .get("/users/users")
          .then((res) => {
            
            const useridarray = res.data.filter((user) => user.username === formState.username);
            dispatch({type: USER_LOGIN, payload: useridarray})
          })
          .catch((e) => console.log(e.message));

        })
        .catch(e => {
          console.log(e.message)
          throw e
        })
  }

  // const validateChange = (e) => {
  //   yup
  //     .reach(loginSchema, e.target.name)
  //     .validate(e.target.value)
  //     .then((valid) => {
  //       setErrors({ ...errors, [e.target.name]: "" });
  //       // console.log('Yup.then ERRORS', errors)
  //     })
  //     .catch((err) => {
  //       setErrors({ ...errors, [e.target.name]: err.errors[0] });
  //       // console.log('Yup.catch ERRORS', errors)
  //     });
  // };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    // validateChange(e);
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
            <Form onSubmit = {formSubmit}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label htmlFor="username" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  value={formState.username}
                  onChange={inputChange}
                  placeholder="something@idk.cool"
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

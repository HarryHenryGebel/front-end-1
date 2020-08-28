import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { registrationSchema } from "./yupSchemas";
import * as yup from "yup";
import axios from "axios";
import AlertRed from "../AlertRed";
//import {useHistory} from 'react-router-dom'
//push /dashboard
export default function RegistrationForm() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    primaryemail: "",
    iimageurl: "",
    terms: false,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    primaryemail: "",
    iimageurl: "",
    terms: ""
  });
  const [post, setPost] = useState([]);

  useEffect(() => {
    // console.log('form state change')
    registrationSchema.isValid(formState).then((valid) => {
      // console.log('valid?', valid)
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    setFormState({
      username: "",
      password: "",
      primaryemail: "",
      iimageurl: "",
      terms: false,
    });
    axios
      .post("https://lre-notapotluck.herokuapp.com/createnewuser", formState)
        .then((res) => {
          setPost(res.data);
          console.log("success", post, res);
        })
        .catch((err) => console.log(err.response));

  };

  const validateChange = (e) => {
    yup
      .reach(registrationSchema, e.target.name)
      .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
        // console.log('Valid ERRORS', errors)
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
        // console.log('Catch ERRORS', errors)
      });
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <div>
      <Button className="bg-login" onClick={toggleModal}>
        Registration
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <form onSubmit={formSubmit}>
          <ModalHeader toggle={toggleModal}>Registration</ModalHeader>
          <ModalBody>
            <Form onSubmit={formSubmit}>
              <FormGroup>
                <Label htmlFor="usename">Username</Label>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  value={formState.username}
                  onChange={inputChange}
                  placeholder="Public Username Here"
                />
                {errors.username.length > 0 ? (
                  <AlertRed
                    message={<p className="error">{errors.username}</p>}
                  />
                ) : null}
                <FormText>
                  Your username can be seen by others &amp; is required.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  value={formState.password}
                  onChange={inputChange}
                  placeholder="Memorable Password Here"
                />
                {errors.password.length > 0 ? (
                  <AlertRed
                    message={<p className="error">{errors.password}</p>}
                  />
                ) : null}
                <FormText>
                  Needs at least 6 characters &amp; is required.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Email">Email</Label>
                <Input
                  type="primaryemail"
                  name="primaryemail"
                  id="Email"
                  value={formState.primaryemail}
                  onChange={inputChange}
                  placeholder="your@primaryemail.com"
                />
                {errors.primaryemail.length > 0 ? (
                  <AlertRed message={<p className="error">{errors.primaryemail}</p>} />
                ) : null}
                <FormText>Required. We will never send spam.</FormText>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="terms"
                    value={formState.terms}
                    onChange={inputChange}
                  />{" "}
                  I Agree to Terms of Service and promise to be a nice human.
                  {errors.terms.length > 0 ? (
                    <AlertRed
                      message={<p className="error">{errors.terms}</p>}
                    />
                  ) : null}
                </Label>
                <FormText>
                  After logging in, you may edit more profile options.
                </FormText>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* temp to test post, delete when done */}
            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
            <Button
              color="primary"
              type="submit"
              onClick={toggleModal}
              disabled={buttonDisabled}
            >
              Submit
            </Button>{" "}
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

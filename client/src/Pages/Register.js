import React, { useState } from "react";
import axios from "axios";
import "../Login.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Register(props) {
  const [errorStatus, setErrorStatus] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [login, setLogin] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("http://localhost:3001/api/user/register", {
        login: login,
        phone_number: phone,
        email: email,
        password: password,
      })
      .then((response) => {
        debugger;
        setErrorStatus(null);
        setRegistrationStatus(response.data.response.msg);
      })
      .catch((error) => {
        debugger;
        setErrorStatus(error.response.data);
        if (!error.response && !error.request) {
          //display
        }
      });
  };

  return (
    <div className="LoginForm">
      <label>Login</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Login</InputGroup.Text>
        <FormControl
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          name="login"
          placeholder="login"
          aria-label="login"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <label>Email</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
        <FormControl
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          placeholder="email"
          aria-label="email"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <label>Password</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">Password</InputGroup.Text>
        <FormControl
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          placeholder="password"
          aria-label="password"
          aria-describedby="basic-addon3"
        />
      </InputGroup>
      <label>Phone</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon4">Phone</InputGroup.Text>
        <FormControl
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          name="phone"
          placeholder="phone"
          aria-label="phone"
          aria-describedby="basic-addon4"
        />
      </InputGroup>
      <div>
        <Button onClick={register} className="m-3" variant="primary">
          Зарегестрироваться
        </Button>
      </div>
      {registrationStatus && (
        <>
          <div class="alert alert-success" role="alert">
            {registrationStatus}
          </div>
        </>
      )}
      {errorStatus && (
        <>
          <div class="alert alert-danger" role="alert">
            {errorStatus}
          </div>
        </>
      )}
    </div>
  );
}

export default Register;

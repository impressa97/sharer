import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");

  // handle button click of login form
  const handleLogin = () => {
    setError(false);
    setLoading(true);
    axios
      .post("http://localhost:3001/api/user/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error, val) => {
        setLoading(false);
        setError(error.response.data);
      });
  };

  return (
    <div className="LoginForm">
      <label>Email</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <FormControl
          {...email}
          name="Email"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <label>Password</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
        <FormControl
          {...password}
          name="Password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <div>
        <Button
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
          className="m-1"
          variant="success"
        >
          Login
        </Button>
        <Button className="m-1" variant="primary">
          Register
        </Button>
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;

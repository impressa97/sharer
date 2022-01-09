import React, { useState, useContext } from "react";
import { userContext } from "../UserContext";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle button click of login form
  const handleLogin = () => {
    setError(false);
    setLoading(true);
    axios
      .post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
      })
      .catch((error) => {
        if (!error.response && !error.request) {
          //display
        }
      });
  };

  return (
    <div className="LoginForm">
      <label>Email</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <FormControl
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("7evendays7@gmail.com");
  const [password, setPassword] = useState("123456");

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
        if (response.data) {
          setUserData({
            token: response.data.token,
            user: response.data.user,
          });
          //переадресация на страничку, запросивушую логин
          navigate(location.state?.from?.pathname || "/");
        } else {
          setLoading(false);
          alert("Internal error");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(false);
        alert(error.response.data);
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
          value={email}
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
          value={password}
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
          Войти
        </Button>
      </div>
    </div>
  );
}

export default Login;

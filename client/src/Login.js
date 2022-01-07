import "./Login.css";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

function Login() {
  return (
    <div className="App">
      <h1 className="FlexCenter">WinterTake</h1>
      <br />
      <div className="LoginForm">
        <label>Email</label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <FormControl
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
            name="Password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <div>
          <Button className="m-1" variant="success">
            Login
          </Button>
          <Button className="m-1" variant="primary">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

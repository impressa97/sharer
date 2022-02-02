import { FiLogIn, FiMail, FiPhone, FiLock } from "react-icons/fi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Register(props) {
  //Статусы ошибок и Информации
  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  //Данные формы
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
        setErrorStatus(null);
        setRegistrationStatus(response.data.response.msg);
        navigate("/login");
      })
      .catch((error) => {
        setErrorStatus(error.response.data);
        if (!error.response && !error.request) {
          //display
        }
      });
  };

  return (
    <>
      <h3>Добро пожаловать!</h3>
      <div className="LoginForm">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FiLogIn />
          </InputGroup.Text>
          <FormControl
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            name="login"
            placeholder="Имя пользователя"
            aria-label="login"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">
            <FiMail />
          </InputGroup.Text>
          <FormControl
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Почта для восстановления пароля"
            aria-label="email"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            <FiLock />
          </InputGroup.Text>
          <FormControl
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Пароль"
            aria-label="password"
            aria-describedby="basic-addon3"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon4">
            <FiPhone />
          </InputGroup.Text>
          <FormControl
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            placeholder="Номер телефона для подтверждения заказов"
            aria-label="phone"
            aria-describedby="basic-addon4"
          />
        </InputGroup>
        <div>
          <Button onClick={register} className="m-3" variant="primary">
            Зарегистрироваться
          </Button>
        </div>
        {registrationStatus && (
          <>
            <div className="alert alert-success" role="alert">
              {registrationStatus}
            </div>
          </>
        )}
        {errorStatus && (
          <>
            <div className="alert alert-danger" role="alert">
              {errorStatus}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Register;

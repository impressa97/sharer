import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const UserRoles = () => {
  const [users, setUsers] = useState([]);
  const [usersBackup, setUsersBackup] = useState([]);
  const [userRoles, setUserRoles] = useState([]);
  const [findUserString, setFindUserString] = useState("");

  //loadings
  useEffect(() => {
    //loading users
    axios
      .post("http://localhost:3001/api/user/get-all-users")
      .then((response) => {
        if (response.data) {
          setUsersBackup(response.data);
          setUsers(response.data);
        } else {
          alert("Internal error");
        }
      })
      .catch((error) => {
        alert(error);
      });

    //loading user_roles
    axios
      .post("http://localhost:3001/api/user/get-all-user-roles")
      .then((response) => {
        if (response.data) {
          setUserRoles(
            response.data.map((option) => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))
          );
        } else {
          alert("Internal error");
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }, []);

  useEffect(() => {
    if (findUserString !== "") {
      setUsers(
        usersBackup.filter((user) => user.fio.indexOf(findUserString) !== -1)
      );
    } else {
      setUsers(usersBackup);
    }
  }, [findUserString]);

  let userRow = (userData) => {
    return (
      <Row key={userData.id} className="mb-3">
        <Form.Group as={Col} controlId="formGridUser">
          <Form.Control
            type="text"
            placeholder="Имя пользователя"
            defaultValue={userData.fio}
            disabled
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridUserRole">
          <Form.Select defaultValue={userData?.user_role_id}>
            {userRoles}
          </Form.Select>
        </Form.Group>
      </Row>
    );
  };

  return (
    <>
      <h1>Список Пользователей</h1>
      <Form.Control
        placeholder="Введите имя пользователя"
        onChange={(e) => {
          setFindUserString(e.target.value);
        }}
      ></Form.Control>
      <Form className="mt-3">{users.map((user) => userRow(user))}</Form>
    </>
  );
};

export default UserRoles;

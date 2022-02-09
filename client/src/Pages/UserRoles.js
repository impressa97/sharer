import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";

const UserRoles = () => {
  const [users, setUsers] = useState([]);
  const [usersBackup, setUsersBackup] = useState([]);
  const [userRoles, setUserRoles] = useState([]);
  const [findUserString, setFindUserString] = useState("");

  function ChangeUserRole(user_id, role_id) {
    axios
      .post("http://localhost:3001/api/user/set-user-role", {
        user_id,
        role_id,
      })
      .then((response) => {
        if (!response.data) {
          alert("Internal error");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  //default loadings
  useEffect(() => {
    //loading users
    axios
      .post("http://localhost:3001/api/user/get-all-users")
      .then((response) => {
        if (response.data) {
          setUsers(response.data);
          setUsersBackup(response.data);
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

  //find users
  useEffect(() => {
    if (findUserString !== "") {
      setUsers(
        usersBackup.filter((user) => user.fio.indexOf(findUserString) !== -1)
      );
    } else {
      setUsers(usersBackup);
    }
  }, [findUserString, usersBackup, users]);

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
          <Form.Select
            onChange={(e) =>
              ChangeUserRole(userData.id, Number(e.target.value))
            }
            defaultValue={userData?.user_role_id}
          >
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

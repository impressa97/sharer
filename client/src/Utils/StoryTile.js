import { Row, Col, Form, Card, Button, Badge } from "react-bootstrap";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import ObjectiveSelect from "./ObjectiveSelect";
import UsersSelect from "./UsersSelect";

function StoryTile(props) {
  const [userData, setUserData] = useContext(UserContext);
  const [rangeValue, setRangeValue] = useState(
    Number(props?.storyTile?.hp) || 0
  );
  const [objectiveId, setObjectiveId] = useState(
    Number(props?.storyTile?.objective_id) || 0
  );
  const [userConsumerId, setUserConsumerId] = useState(
    Number(props?.storyTile?.user_consumer_id) || 0
  );
  const [userProducerId, setUserProducerId] = useState(
    Number(props?.storyTile?.user_producer_id) || 0
  );
  const [note, setNote] = useState(props?.storyTile?.note || "");

  function insertStory() {
    if (
      userConsumerId &&
      userProducerId &&
      props.goodsId &&
      objectiveId &&
      note
      //rangeValue - может быть 0
    )
      axios
        .post(
          "http://localhost:3001/api/goods/insert-goods-story",
          {
            user_consumer_id: userConsumerId,
            user_producer_id: userProducerId,
            hp: rangeValue,
            goods_id: props.goodsId,
            objective_id: objectiveId,
            note: note,
            user_id: userData.user.id,
          },
          {
            headers: {
              "auth-token": userData.token,
            },
          }
        )
        .then((response) => {
          if (!response.data) {
            alert("Ошибка");
          } else {
            props.cbNewStory(response.data);
          }
        })
        .catch((error) => {
          alert(error.response.data);
        });
    else alert("Заполните форму");
  }

  let buttonAdd;
  let date;
  let disabled;
  if (props?.storyTile === undefined) {
    buttonAdd = (
      <Button variant="success" onClick={insertStory}>
        Добавить
      </Button>
    );
    date = (
      <Form.Control
        type="date"
        defaultValue={new Date().toISOString().slice(0, 10)}
      ></Form.Control>
    );
    disabled = false;
  } else {
    buttonAdd = "";
    date = new Date(props?.storyTile?.date);
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    date = date.getFullYear() + "-" + month + "-" + dt;
    disabled = true;
  }

  return (
    <>
      <Card border="dark" className="mt-2">
        <Card.Header>
          <h6>Дата действия:</h6>
          {date}
        </Card.Header>
        <Card.Body>
          <Card.Title>Карточка</Card.Title>
          <Card.Text>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Состояние:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <Form.Range
                  disabled={disabled}
                  step="1"
                  min="0"
                  max="100"
                  onChange={(event) =>
                    setRangeValue(Number(event.target.value))
                  }
                  defaultValue={rangeValue}
                />
                <Badge bg="secondary">{rangeValue}</Badge>
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Выдавший:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <UsersSelect
                  onChange={(e) => {
                    setUserProducerId(Number(e.target.value));
                  }}
                  disabled={disabled}
                  activeUserId={userProducerId}
                  userOptions={props?.userOptions}
                />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Получатель:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <UsersSelect
                  onChange={(e) => {
                    setUserConsumerId(Number(e.target.value));
                  }}
                  disabled={disabled}
                  activeUserId={userConsumerId}
                  userOptions={props?.userOptions}
                />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Действие:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <ObjectiveSelect
                  onChange={(e) => {
                    setObjectiveId(Number(e.target.value));
                  }}
                  disabled={disabled}
                  objectiveOptions={props?.objectiveOptions}
                  activeObjective={objectiveId}
                />
              </Col>
            </Row>
          </Card.Text>
          <Row className="p-2">
            <Col className="col-4 d-flex justify-content-end align-items-center">
              <Form.Label>Примечание:</Form.Label>
            </Col>
            <Col className="col-8 d-flex justify-content-center align-items-center">
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                disabled={disabled}
                defaultValue={note}
              />
            </Col>
          </Row>
          {buttonAdd}
        </Card.Body>
      </Card>
    </>
  );
}

export default StoryTile;

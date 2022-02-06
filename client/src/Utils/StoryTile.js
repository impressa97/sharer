import { Row, Col, Form, Card, Button } from "react-bootstrap";
import PlaceSelect from "./PlaceSelect";
import ReasonSelect from "./ReasonSelect";
import UsersSelect from "./UsersSelect";

function StoryTile(props) {
  let buttonAdd;
  let date;
  let disabled;

  if (props?.storyTile === undefined) {
    buttonAdd = <Button variant="success">Добавить</Button>;
    date = <Form.Control id="date" type="date" defaultValue={new Date().toISOString().slice(0, 10)}></Form.Control>;
    disabled = false;
  } else {
    buttonAdd = "";
    date = props.date;
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
                <Form.Range disabled={disabled} defaultValue={props?.hp} />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Выдавший:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <UsersSelect {...{ disabled, user_producer: props?.user_producer_id, userOptions: props?.userOptions }} />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Получатель:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <UsersSelect {...{ disabled, user_producer_id: props?.user_consumer_id, userOptions: props?.userOptions }} />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label> Нахождение:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <PlaceSelect {...{ disabled, user_producer_id: props?.place }} />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label> Цель:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <ReasonSelect {...{ disabled, target: props?.target }} />
              </Col>
            </Row>
          </Card.Text>
          {buttonAdd}
        </Card.Body>
      </Card>
    </>
  );
}

export default StoryTile;

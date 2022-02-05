import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FiBox } from "react-icons/fi";
import PlaceSelect from "./PlaceSelect";
import ReasonSelect from "./ReasonSelect";
import UsersSelect from "./UsersSelect";

function StoryTile(props) {
  let date;
  let fio;
  let buttonAdd;
  if (!Object.keys(props).length) {
    fio = <UsersSelect />;
    date = <Form.Control id="date" type="date" defaultValue={new Date().toISOString().slice(0, 10)}></Form.Control>;
    buttonAdd = <Button variant="success">Добавить</Button>;
  } else {
    fio = props.fio;
    date = props.date;
    buttonAdd = "";
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
                <Form.Range disabled={props?.disbled} props={props?.visualPoints} />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>Получатель:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">{fio}</Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label> Нахождение:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <PlaceSelect props={{ place: props?.place, disbled: props?.disbled }} />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label> Цель:</Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <ReasonSelect props={{ target: props?.target, disbled: props?.disbled }} />
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

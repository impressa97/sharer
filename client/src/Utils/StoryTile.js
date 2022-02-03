import { Row, Col, Form, Card } from "react-bootstrap";
import { FiBox } from "react-icons/fi";
import PlaceSelect from "./PlaceSelect";
import ReasonSelect from "./ReasonSelect";

function StoryTile() {
  return (
    <>
      <Card border="dark" className="mt-2">
        <Card.Header>Дата действия: {"12.04.2021"}</Card.Header>
        <Card.Body>
          <Card.Title>Получатель: {"Иванов И.И"}</Card.Title>
          <Card.Text>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>
                  <FiBox />
                  Состояние:
                </Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <Form.Range />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>
                  <FiBox />
                  Нахождение:
                </Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <PlaceSelect />
              </Col>
            </Row>
            <Row className="p-2">
              <Col className="col-4 d-flex justify-content-end align-items-center">
                <Form.Label>
                  <FiBox />
                  Цель:
                </Form.Label>
              </Col>
              <Col className="col-8 d-flex justify-content-center align-items-center">
                <ReasonSelect />
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default StoryTile;

import { Row, Col, Form, Button } from "react-bootstrap";
import { FiBox, FiRefreshCcw, FiTrash } from "react-icons/fi";

function GoodsTile(props) {
  return (
    <Col xs={4} className="mt-4">
      <div className="card">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" defaultValue={props.note}></textarea>
          <Row className="p-2">
            <Col xs={4} className="mx-auto">
              <Button variant="primary">
                <FiRefreshCcw />
              </Button>
            </Col>
            <Col xs={4} className="mx-auto">
              <Button variant="danger">
                <FiTrash />
              </Button>
            </Col>
          </Row>
          <Row className="p-2">
            <Col xs={12} className="mx-auto">
              <Form.Label>
                <FiBox /> Визуальное состояние:
              </Form.Label>
              <Form.Range />
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
}

export default GoodsTile;

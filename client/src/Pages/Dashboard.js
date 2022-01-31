import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

var elements = [];
function Dashboard(props) {
  console.log(1);
  const [elements, setElements] = useState([]);

  const getElements = () => {
    axios
      .get("http://localhost:3001/api/rental/get-equipment", {
        page: 1,
      })
      .then((response) => {
        console.log(2);
        setElements(response.data.response);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  getElements();
  console.log(3);
  return (
    <div>
      <Container>
        <Row>
          {elements.map((value, index) => {
            return (
              <Col xs={4} className="mt-3">
                <div className="card">
                  {/* <img src="..." class="card-img-top" alt="..."> */}
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Row>
                      <Col xs={4} className="mt-3">
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </Col>
                      <Col xs={4} className="mt-3">
                        <>
                          <Form.Label>Range</Form.Label>
                          <Form.Range />
                        </>
                      </Col>
                      <Col xs={4} className="mt-3">
                        <a href="#" className="btn btn-danger">
                          Удалить
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, InputGroup, Container, Row, Col, Alert } from "react-bootstrap";

function AddGoods() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [note, setnote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(title);
  }, [title]);
  const handleInsert = () => {
    axios
      .post("http://localhost:3001/api/user/login", {})
      .then((response) => {
        if (response.data) {
        } else {
          alert("Internal error");
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Наименование</Form.Label>
              <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Наименование" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Цена</Form.Label>
              <Form.Control type="number" placeholder="Цена" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control type="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Изображение</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddGoods;

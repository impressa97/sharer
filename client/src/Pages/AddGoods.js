import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function AddGoods() {
  const [title, setTitle] = useState("1");
  const [price, setPrice] = useState("2");
  const [note, setNote] = useState("3");
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useContext(UserContext);

  const handleInsert = () => {
    let formData = new FormData();
    if (image) {
      formData.append("image", image);
      formData.append("image_name", image.name);
    } else {
      formData.append("image", null);
      formData.append("image_name", null);
      alert("Добавьте картинку");
      return false;
    }
    formData.append("note", note);
    formData.append("price", price);
    formData.append("title", title);
    axios
      .post("http://localhost:3001/api/goods/insert-goods", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": userData.token,
        },
      })
      .then((response) => {
        if (!response.data) {
          alert("Internal error");
        }
        setTitle("");
        setPrice("");
        setNote("");
        setImage("");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally((e) => {
        console.log("finnaly");
      });
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Наименование</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Наименование" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Цена</Form.Label>
              <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Цена" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control as="textarea" value={note} onChange={(e) => setNote(e.target.value)} rows={3} />
            </Form.Group>
            <Form.Group controlId="formFile" accept=".jpeg" value={image} onChange={(e) => setImage(e.target.files[0])} className="mb-3">
              <Form.Label>Изображение</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
            <>
              <Button variant="success" onClick={handleInsert}>
                Добавить
              </Button>
            </>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddGoods;

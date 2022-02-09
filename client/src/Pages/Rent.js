import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";

function Rent(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/goods/get-goods-by-type_id", {
        type_id: props.type_id,
      })
      .then((res) => {
        if (res.data) {
          setList(res.data);
        } else {
          alert("Error");
        }
      });
  }, [props.type_id]);

  return (
    <div>
      <Row className="p-3">
        {list.map((val) => {
          return (
            <Col className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={"http://localhost:3001/" + val.data.image_link}
                />
                <Card.Body>
                  <Card.Title>{val.data.title}</Card.Title>
                  <Card.Text>{val.data.note}</Card.Text>
                  <Button
                    variant={val?.status?.objective_Alias?.variant || "light"}
                  >
                    {val?.status?.objective_Alias?.title_for_guest ||
                      "Только поступил в WinterTake. Ожидайте!"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Rent;

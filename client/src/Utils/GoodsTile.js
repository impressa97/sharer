import { Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import StoryTile from "./StoryTile";
import axios from "axios";
import { UserContext } from "../UserContext";

function GoodsTile(props) {
  const [userData, setUserData] = useContext(UserContext);

  function RemoveGoodsInstane(id) {
    axios
      .post(
        "http://localhost:3001/api/goods/delete-goods",
        {
          goods_id: id,
        },
        {
          headers: {
            "auth-token": userData.token,
          },
        }
      )
      .then((response) => {
        if (!response.data.success) {
          alert("Ошибка");
        } else {
          props.cb(id);
        }
      })
      .catch((error) => {
        alert("Ошибка");
      });
  }

  return (
    <Row>
      <Col xs={6} className="mt-4">
        <Card>
          <Card.Img variant="top" src={"http://localhost:3001/" + props.image_link} />
          <Card.Body>
            <Row>
              <Col className="mt-3 col-16 d-flex justify-content-center align-items-center">
                <h5 className="card-title">{props.title}</h5>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3 col-16 d-flex justify-content-center align-items-center">{props.note}</Col>
            </Row>
            <Row>
              <Col className="mt-3 col-16 d-flex justify-content-center align-items-center">
                <Button variant="danger" onClick={(e) => RemoveGoodsInstane(props.id)}>
                  Удалить
                </Button>
              </Col>
            </Row>
            <StoryTile />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default GoodsTile;

import { Row, Col, Card, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import StoryTile from "./StoryTile";
import axios from "axios";
import { UserContext } from "../UserContext";

function GoodsTile(props) {
  const [userData, setUserData] = useContext(UserContext);
  const [storyTile, setstoryTile] = useState([]);
  const [blocked, setBlocked] = useState(false);

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
          props.cbUnmount(id);
        }
      })
      .catch((error) => {
        alert("Ошибка");
      });
  }

  function getStoryTiles() {
    axios
      .post(
        "http://localhost:3001/api/goods/get-goods-story",
        { good_id: props.id },
        {
          headers: {
            "auth-token": userData.token,
          },
        }
      )
      .then((response) => {
        setBlocked(true);
        if (!response.data.error && response.data.goodsStoryArray.length) {
          setstoryTile(response.data.goodsStoryArray);
        }
      })
      .catch((error) => {
        setBlocked(true);
      });
  }

  useEffect(() => {
    if (!blocked) {
      getStoryTiles();
    }
    setBlocked(false);
  }, [storyTile]);

  return (
    <Col xs={6} className="mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={"http://localhost:3001/" + props.image_link}
        />
        <Card.Body>
          <Row>
            <Col className="mt-3 col-16 d-flex justify-content-center align-items-center">
              <h5 className="card-title">{props.title}</h5>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 col-16 d-flex justify-content-center align-items-center">
              {props.note}
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 col-16 d-flex justify-content-center align-items-center">
              <Button
                variant="danger"
                onClick={(e) => RemoveGoodsInstane(props.id)}
              >
                Удалить
              </Button>
            </Col>
          </Row>
          <StoryTile
            cbNewStory={(sqlData) => {
              setBlocked(true);
              setstoryTile([sqlData, ...storyTile]);
              setBlocked(false);
            }}
            goodsId={props.id}
            userOptions={props?.userOptions}
            objectiveOptions={props?.objectiveOptions}
          />
          {storyTile.map((value) => {
            return (
              <StoryTile
                key={value.id}
                goodsId={value.goods_id}
                userOptions={props?.userOptions}
                storyTile={value}
                objectiveOptions={props?.objectiveOptions}
              />
            );
          })}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GoodsTile;

import { Col, Card } from "react-bootstrap";
import StoryTile from "./StoryTile";

function GoodsTile(props) {
  return (
    <Col xs={6} className="mt-4">
      <Card>
        <Card.Img variant="top" src={"http://localhost:3001/" + props.image_link} />
        <Card.Body>
          <h5 className="card-title">{props.title}</h5>
          {props.note}
          <StoryTile />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default GoodsTile;

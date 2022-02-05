import { Form } from "react-bootstrap";

function PlaceSelect(props) {
  return (
    <Form.Select id="place" disabled={props?.disabled}>
      <option value="0">Арендатор</option>
      <option value="2">Склад</option>
      <option value="3">Ремонтный цех</option>
    </Form.Select>
  );
}

export default PlaceSelect;

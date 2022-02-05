import { Form } from "react-bootstrap";

function ReasonSelect(props) {
  return (
    <Form.Select id="reason" disabled={props?.disbled}>
      <option value="0">Взят в аренду</option>
      <option value="1">Склад</option>
      <option value="2">Ремонтный цех</option>
    </Form.Select>
  );
}

export default ReasonSelect;

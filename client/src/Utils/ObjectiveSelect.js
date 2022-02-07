import { Form } from "react-bootstrap";

function ObjectiveSelect(props) {
  let defaultValue = undefined;
  if (props?.activeObjective) {
    defaultValue = props?.activeObjective;
  }
  return (
    <Form.Select
      disabled={props?.disabled}
      defaultValue={defaultValue}
      onChange={props.onChange}
    >
      {!defaultValue && (
        <option disabled selected value>
          -- Выберете Действие --
        </option>
      )}
      {props?.objectiveOptions.map((val) => {
        return <option value={val.id}>{val.title}</option>;
      })}
    </Form.Select>
  );
}

export default ObjectiveSelect;

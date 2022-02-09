import { Form } from "react-bootstrap";

function UsersSelect(props) {
  let defaultValue = undefined;
  if (props?.activeUserId) {
    defaultValue = props?.activeUserId;
  }

  return (
    <Form.Select
      disabled={props?.disabled}
      defaultValue={defaultValue}
      onChange={props.onChange}
    >
      {!defaultValue && (
        <option disabled selected value>
          -- Выберете Пользователя--
        </option>
      )}
      {props?.userOptions.map((val) => {
        return (
          <option key={val.id} value={val.id}>
            {val.fio}
          </option>
        );
      })}
    </Form.Select>
  );
}

export default UsersSelect;

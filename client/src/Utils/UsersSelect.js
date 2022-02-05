import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

function UsersSelect(props) {
  const [options, SetOptions] = useState([]);
  useEffect(() => {
    SetOptions([<option value="0">Ильдар</option>, <option value="1">Тагил</option>]);
  }, [options]);

  return (
    <Form.Select id="reason" disabled={props?.disbled}>
      {options}
    </Form.Select>
  );
}

export default UsersSelect;

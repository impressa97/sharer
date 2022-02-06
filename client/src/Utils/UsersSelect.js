import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function UsersSelect(props) {
  //useEffect(() => {
  //  //SetOptions();
  //}, [options]);

  return (
    <Form.Select id="reason" disabled={props?.disabled}>
      {/* {props} */}
    </Form.Select>
  );
}

export default UsersSelect;

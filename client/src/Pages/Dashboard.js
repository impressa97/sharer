import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FormControl, InputGroup, Container, Row, Col, Alert } from "react-bootstrap";
import useGoodsSearch from "../Utils/useGoodsSearch";
import GoodsTile from "../Utils/GoodsTile";
import { FiPlus, FiTool } from "react-icons/fi";

function Dashboard(props) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [userOptions, userSetOptions] = useState([]);
  const { loading, error, goods, setGoods, hasMore } = useGoodsSearch(query, pageNumber);

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/user/get-all-users")
      .then((response) => {
        userSetOptions(response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, []);

  function unmountTile(id) {
    setGoods(
      goods.filter(function (item) {
        return item.id !== id;
      })
    );
  }

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <Container>
      <Container>
        <Row>
          <Col className="text-center">
            <InputGroup className="mt-3">
              <InputGroup.Text id="basic-addon1">
                <FiTool />
              </InputGroup.Text>
              <FormControl placeholder="Поиск оборудования" onChange={handleSearch} />
              <Link to="/AddGoods" className="btn btn-success">
                Добавить новое
                <FiPlus />
              </Link>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <Row>
        {goods.map((equipment) => {
          return <GoodsTile userOptions={userOptions} cb={unmountTile} key={equipment.id} {...equipment} />;
        })}
      </Row>
      {loading && (
        <Alert className="mt-3" variant="primary">
          Загрузка...
        </Alert>
      )}
      {error && (
        <Alert className="mt-3" variant="danger">
          Ошибка загрузки
        </Alert>
      )}
    </Container>
  );
}

export default Dashboard;

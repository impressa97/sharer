import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, InputGroup, Container, Row, Col, Alert } from "react-bootstrap";
import useGoodsSearch from "../Utils/useGoodsSearch";
import GoodsTile from "../Utils/GoodsTile";
import { FiPlus, FiTool } from "react-icons/fi";

function Dashboard(props) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const { loading, error, goods, hasMore } = useGoodsSearch(query, pageNumber);
  return (
    <div>
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
      <Container>
        <Row>
          {goods.map((equipment) => {
            return <GoodsTile key={equipment.id} {...equipment} />;
          })}
        </Row>
      </Container>
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
    </div>
  );
}

export default Dashboard;

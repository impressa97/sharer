import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/about">
              WinterTake
            </NavLink>
            <Button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Новости
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Проверка оборудования
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Войти
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Регистрация
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* {userData.user ? userData.user.fio : ""} */}
          </div>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© 2022 Макаров А.С</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Button variant="text-muted" to="#">
                <FiTwitter />
              </Button>
            </li>
            <li className="ms-3">
              <Button variant="text-muted" to="#">
                <FiInstagram />
              </Button>
            </li>
            <li className="ms-3">
              <Button variant="text-muted" to="#">
                <FiFacebook />
              </Button>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export { Layout };

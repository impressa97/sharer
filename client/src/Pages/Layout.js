import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../UserContext";

const Layout = () => {
  const [userContext, setUserContext] = useContext(UserContext);
  const handleLogout = () => {
    setUserContext({
      token: null,
      user: null,
    });
  };

  const logged = () => {
    if (!userContext?.token) {
      return "";
    } else {
      return (
        <Button onClick={handleLogout} className="m-1" variant="danger">
          Выйти
        </Button>
      );
    }
  };

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
                {userContext?.token && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      Проверка оборудования
                    </NavLink>
                  </li>
                )}
                {userContext?.token && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user-roles">
                      Назначение прав пользователям
                    </NavLink>
                  </li>
                )}
                {!userContext?.token && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Войти
                    </NavLink>
                  </li>
                )}
                {!userContext?.token && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Регистрация
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
            {userContext.user ? userContext.user.fio : ""}
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
            <li className="ms-3">{logged()}</li>
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

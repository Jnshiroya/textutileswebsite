import PropTypes from "prop-types";
import { a } from "react-router-dom";

export default function Navbar(prop) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {prop.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href='/'>Disabled</a>
        </li> */}
              </ul>
              {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
              <div
                className={`form-check form-switch text-${
                  prop.mode === "dark" ? "light" : "dark"
                } mx-3 my-3`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={prop.switchmode}
                />
                <label
                  className="nav-item form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  SET MODE
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "STRANGER TEXUTILES APP",
};

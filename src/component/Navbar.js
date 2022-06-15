import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(prop) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {prop.title}
            </Link>
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
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    ABOUT
                  </Link>
                </li> */}
                {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to='/'>Disabled</Link>
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

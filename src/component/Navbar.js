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
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                </li>
               
              </ul>
             
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

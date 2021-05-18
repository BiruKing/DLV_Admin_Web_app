import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav_bar() {
  /* <Link to="/Home">
          <Button type="submit">Submit</Button>
        </Link> */
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark"
      style={{ marginBottom: "0", borderRadius: "0" }}
    >
      <div className="container-fluid">
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <a className="navbar-brand">Navbar</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/statistics" style={{ textDecoration: "none" }}>
                <a className="nav-link " aria-current="page">
                  Statistics
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" style={{ textDecoration: "none" }}>
                <a className="nav-link " aria-current="page">
                  Reports
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Traffics
              </a>

              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to="/viewTraffics" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item">ViewTraffics</a>
                  </Link>
                </li>
                <li>
                  <Link to="/updateTraffics" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item">UpdateTraffics</a>
                  </Link>
                </li>
                <li>
                  <Link to="/addTraffics" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item">AddTraffics</a>
                  </Link>
                </li>
                <li>
                  <Link to="/removeTraffics" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item">RemoveTraffics</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              <span className="nav-item"></span> Log Out
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Nav_bar;

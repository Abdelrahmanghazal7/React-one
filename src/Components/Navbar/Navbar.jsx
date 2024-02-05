import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Ghazal from "../../assets/Ghazal.png";
import vector from "../../assets/vector.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [togglerOpen, setTogglerOpen] = useState(false);

  const changheight = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changheight);

  const closeNavbarToggler = () => {
    if (togglerOpen) {
      setTogglerOpen(false);
    } else {
      setTogglerOpen(true);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${navbar ? " active" : ""}`}>
      <div className="container">
        <Link className="navbar-brand" to={""}>
          <img src={Ghazal} alt="" className="ghazal" />
        </Link>

        <img
          src={vector}
          alt=""
          className="navbar-toggler vector"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div
          className={`collapse navbar-collapse ${togglerOpen}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                onClick={closeNavbarToggler}
                className="nav-link"
                to={"About"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={closeNavbarToggler}
                className="nav-link"
                to={"Portfolio"}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={closeNavbarToggler}
                className="nav-link"
                to={"Contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

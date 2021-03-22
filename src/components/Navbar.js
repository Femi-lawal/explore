import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            EXPLR <i class="fab fa-typo3"></i>
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/serbices"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign-up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="beach" />
          </Link>
          <button type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" onClick={handleToggle} />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/" onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" onClick={handleToggle}>
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

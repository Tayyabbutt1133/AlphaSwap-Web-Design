// Navbar.jsx
import React, { useState } from "react";
import mainLogo from "../../Images/AlphaLogo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import "./navbar.scss";
import { NavLink } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (

    <div className="Main-Navbar">
     

      <nav className="Navbar">
      <Fade direction="down">
        <div className="Navbar-logo">
          <img src={mainLogo} alt="" />
          </div>
        <div className="Nav-links">
          <ul className="nav-inner-links">
            <li>
              <NavLink to="">Docs</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FaQs</NavLink>
            </li>
            <li>
              <NavLink to="/launchdapp">Launch Dapp</NavLink>
            </li>
            <button className="btn">
              <NavLink to="/contactus">Contact us</NavLink>
            </button>
          </ul>
          </div>
          </Fade>
        {isMobileNavOpen ? (
          <FaTimes
            className="toggle-icons close-icon"
            size={25}
            onClick={handleNavToggle}
          />
        ) : (
          <FaBars
            className="toggle-icons open-icon"
            size={25}
            onClick={handleNavToggle}
          />
        )}
      </nav>

      {/* Mobile-SideNavbar  */}
      <Fade>
      <div className={`Mobile-sideBar ${isMobileNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="">Docs</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">FaQ</NavLink> 
          </li>
          <li>
            <NavLink to="/launchdapp">Launch Dapp</NavLink>
          </li>
          <button className="sideNav-btn">
            <NavLink to="/contactus">Contact us</NavLink>
          </button>
        </ul>
        </div>
        </Fade>
      </div>
  );
};

export default Navbar;

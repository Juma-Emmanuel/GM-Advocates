import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import Menu from "../../assets/menu.png";
import { Link } from "react-router-dom";
import PracticeAreaLinks from "./PracticeAreaLinks";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          className="desktopMenuListItem"
        >
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="desktopMenuListItem"
        >
          About
        </Link>

        <div
          className="practise-area-links"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
          }}
        >
          <h className="navlink">Practice Areas</h>
          {isDropdownVisible && (
            <div
              style={{
                position: "absolute",
              }}
            >
              <PracticeAreaLinks />
            </div>
          )}
        </div>
        <Link
          activeClass="active"
          to="/our-people/"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="desktopMenuListItem"
        >
          Our people
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="desktopMenuListItem"
        >
          Contact Us
        </Link>
        <button className="ConsultationBtn">Free Consultation</button>
      </div>

      <div className="mobMenu" onClick={() => setshowMenu(!showMenu)}>
        {showMenu ? <h className="closeBtn">X</h> : <i class="fa fa-bars"></i>}
      </div>

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Home{" "}
        </Link>
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          About
        </Link>
        <div
          className="pract-navlink"
          onClick={() => setDropdownVisible(!isDropdownVisible)}
          style={{
            position: "relative",
          }}
        >
          <div className="pract-link">
            <h>Practice Areas</h>
            {isDropdownVisible ? (
              <i class="fa fa-angle-up"></i>
            ) : (
              <i class="fa fa-angle-down"></i>
            )}
          </div>

          {isDropdownVisible && (
            <div>
              <PracticeAreaLinks />
            </div>
          )}
        </div>

        <Link
          activeClass="active"
          to="/our-people/"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Our People
        </Link>
        <Link
          activeClass="active"
          to="careers"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Careers
        </Link>
        <Link
          activeClass="active"
          to="reviews"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Reviews
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Contact Us
        </Link>
        <button className="ConsultationBtn">Free Consultation</button>
      </div>
    </div>
  );
};

export default Navbar;

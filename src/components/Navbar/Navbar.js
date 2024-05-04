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
          to="home"
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
      </div>
      <button className="ConsultationBtn">Free Consultation</button>

      <img
        src={Menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setshowMenu(!showMenu)}
      />

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
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Practise Areas
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={600}
          className="listItem"
          onClick={() => setshowMenu(false)}
        >
          Contact
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
          Contact
        </Link>
        <button className="ConsultationBtn">Free Consultation</button>
      </div>
    </div>
  );
};

export default Navbar;

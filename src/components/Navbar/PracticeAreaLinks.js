import React from "react";
import { Link } from "react-router-dom";
import "./PracticeAreaLinks.css";
function PracticeAreaLinks() {
  return (
    <div className="menus">
      <Link to="/litigation-dispute/" className="menu-link">
        Litigation and dispute resolution{" "}
      </Link>
      <Link to="/technology-ip-internetlaw/" className="menu-link">
        Technology, Intellectual Property (IP) & Internet Law{" "}
      </Link>
      <Link to="/corporate-commercial-law/" className="menu-link">
        Corporate & Commercial Law{" "}
      </Link>
      <Link to="/real-estate-property-law/" className="menu-link">
        Real Estate & Property Law{" "}
      </Link>
      <Link to="/aviation-law-practise/" className="menu-link">
        Aviation Law & Practice{" "}
      </Link>
      <Link to="/procurement-law/" className="menu-link">
        Procurement Law{" "}
      </Link>

      <Link to="/" className="menu-link">
        IT, Data Protection & Crypto{" "}
      </Link>
      <Link to="/" className="menu-link">
        Family, Marriage & Succession{" "}
      </Link>
      <Link to="/" className="menu-link">
        Notarial Services & Certificates{" "}
      </Link>
      <Link to="/" className="menu-link">
        Investment & Franchise{" "}
      </Link>
    </div>
  );
}

export default PracticeAreaLinks;

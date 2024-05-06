import React from "react";

import "./PersonCard.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
const PersonCard = ({
  profilePic,
  firstName,
  lastName,
  position,
  profileLink,
}) => {
  return (
    <div className="card">
      <img className="profile-pic" src={profilePic} alt="Profile" />

      <div className="info">
        <h2 className="name">
          {firstName} {lastName}
        </h2>
        <p className="position">{position}</p>
        <Link to={profileLink} className="view-more">
          View More
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;
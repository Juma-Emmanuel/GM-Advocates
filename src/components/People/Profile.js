import React from "react";
import profileImg from "../../assets/lawyer.jpg";
import "./Profile.css";
const Profile = ({ name, about }) => {
  return (
    <section id="profile">
      <div className="profile-img-div">
        <img src={profileImg} className="profile-img" alt="profile-img" />
      </div>
      <div className="profile-content">
        <h1>{name}</h1>
        <p className="position">position</p>
        <p className="about">{about}</p>
      </div>
    </section>
  );
};

export default Profile;

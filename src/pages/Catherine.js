import React from "react";
import profileImg from "../assets/catherine.jpeg";
import ProfilePage from "../components/People/ProfilePage";
function Catherine() {
  const name = "Catherine M. Mwinzi";
  const position = "Adminstrator";
  const about =
    "Catherine is a seasoned professional with over 15 years of experience, and has worked in various sectors. Catherine holds a Diploma in Human Resource Management and Diploma in Business Management. She manages and handles the daily business operations of the firm to support the day to day activities. Catherine joined G. M Orina & Co. Advocates in 2023.";
  return (
    <div>
      <ProfilePage
        profileImg={profileImg}
        name={name}
        about={about}
        position={position}
      />
    </div>
  );
}

export default Catherine;

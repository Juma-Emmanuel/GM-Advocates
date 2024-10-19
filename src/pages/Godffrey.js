import React from "react";
import profileImg from "../assets/Godfrey.jpeg";
import ProfilePage from "../components/People/ProfilePage";
const name = "Godfrey Orina";
const position = "Managing Partner";
const about =
  "Godfrey represents clients across a range of industries and focuses on commonial transactions, merges and acquisitions.";

function Godffrey() {
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

export default Godffrey;

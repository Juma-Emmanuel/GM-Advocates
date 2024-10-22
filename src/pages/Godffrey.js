import React from "react";
import profileImg from "../assets/Godfrey.jpeg";
import ProfilePage from "../components/People/ProfilePage";
const name = "Godfrey Orina";
const position = "Managing Partner";
const about =
  "Godfrey is an Advocate of the high court of Kenya and a founding partner with wide experience in Litigation and Dispute resolution with a particular focus on constitutional law, commercial Litigation and tax law.";

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
